"use client"

import { useState, FormEvent } from 'react'
import { Player } from '@/types/player'
import PlayerList from '@/components/player-list'
import SelectedTeam from '@/components/selected-team'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { generatePlayers } from '@/utils/player-generator'
import { submitTeam } from '@/app/actions'

export default function Dream11Clone() {
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>(() => generatePlayers(66))
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const totalPrice = selectedPlayers.reduce((sum, player) => sum + player.price, 0)

  const handleSelectPlayer = (player: Player) => {
    if (selectedPlayers.length >= 9) {
      toast({
        title: "Team Full",
        description: "You can only select up to 9 players.",
        variant: "destructive",
      })
      return
    }

    if (totalPrice + player.price > 15000) {
      toast({
        title: "Budget Exceeded",
        description: "Total price cannot exceed Rs 15000.",
        variant: "destructive",
      })
      return
    }

    setSelectedPlayers((prevPlayers) => [...prevPlayers, player])
    setAvailablePlayers((prevPlayers) => prevPlayers.filter(p => p.id !== player.id))
  }

  const handleRemovePlayer = (player: Player) => {
    setSelectedPlayers((prevPlayers) => prevPlayers.filter(p => p.id !== player.id))
    setAvailablePlayers((prevPlayers) => [...prevPlayers, player])
  }

  const handleSubmitTeam = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (selectedPlayers.length !== 9) {
      toast({
        title: "Invalid Team",
        description: "Please select exactly 9 players.",
        variant: "destructive",
      })
      return
    }

    if (!email.endsWith('@morganstanley.com')) {
      toast({
        title: "Invalid Email",
        description: "Please use a valid @morganstanley.com email address.",
        variant: "destructive",
      })
      return
    }

    if (password.length < 6) {
      toast({
        title: "Invalid Password",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      })
      return
    }

    try {
      const result = await submitTeam(selectedPlayers, email, password)
      if (result.success) {
        toast({
          title: result.data.isNewTeam ? "Team Created" : "Team Updated",
          description: result.data.isNewTeam 
            ? "Your team has been successfully created!" 
            : "Your team has been successfully updated!",
        })
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Risk-Tech Premier League</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PlayerList players={availablePlayers} onSelectPlayer={handleSelectPlayer} />
        <SelectedTeam 
          players={selectedPlayers} 
          onRemovePlayer={handleRemovePlayer}
          totalPrice={totalPrice}
        />
      </div>
      <form onSubmit={handleSubmitTeam} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.name@morganstanley.com"
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="mt-1"
          />
        </div>
        <Button type="submit" size="lg" className="w-full">
          Submit Team
        </Button>
      </form>
    </div>
  )
}


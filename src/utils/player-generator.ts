import { Player } from '../types/player'

export function generatePlayers(count: number): Player[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    price: Math.floor(Math.random() * (2000 - 500 + 1) + 500)
  }))
}


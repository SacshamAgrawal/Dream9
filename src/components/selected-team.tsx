import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Player } from '@/types/player'
import { Button } from '@/components/ui/button'

interface SelectedTeamProps {
  players: Player[]
  onRemovePlayer: (player: Player) => void
  totalPrice: number
}

export default function SelectedTeam({ players, onRemovePlayer, totalPrice }: SelectedTeamProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold p-4 border-b">Your Dream 9</h2>
      <ScrollArea className="h-[500px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price (Rs)</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.price}</TableCell>
                <TableCell>
                  <Button onClick={() => onRemovePlayer(player)} variant="destructive" size="sm">Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <div className="p-4 border-t">
        <p className="text-xl font-semibold">Total: Rs {totalPrice}</p>
        <p className="text-sm text-muted-foreground">
          {players.length} / 9 players selected
        </p>
      </div>
    </div>
  )
}


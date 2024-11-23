import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Player } from '@/types/player'
import { Button } from '@/components/ui/button'

interface PlayerListProps {
  players: Player[]
  onSelectPlayer: (player: Player) => void
}

export default function PlayerList({ players, onSelectPlayer }: PlayerListProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold p-4 border-b">Available Players</h2>
      <ScrollArea className="h-[600px]">
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
                  <Button onClick={() => onSelectPlayer(player)} size="sm">Select</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}


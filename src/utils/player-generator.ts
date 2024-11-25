import { Player } from '../types/player'
// import fs from 'fs'
// import csv from 'csv-parser'

export function generatePlayers(count: number): Player[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    price: Math.floor(Math.random() * (2000 - 500 + 1) + 500),
    gender: Math.random() > 0.7 ? 'female' : 'male',
    type: ['allrounder', 'batter', 'bowler'][Math.floor(Math.random() * 3)] as 'allrounder' | 'batter' | 'bowler'
  }))
}

// export async function generatePlayersFromCSV(filePath: string): Promise<Player[]> {
//   return new Promise((resolve, reject) => {
//     const results: Player[] = [];
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (data) => {
//         results.push({
//           id: parseInt(data.id),
//           name: data.name,
//           price: parseInt(data.price),
//           gender: data.gender as 'male' | 'female',
//           type: data.type as 'allrounder' | 'batter' | 'bowler'
//         });
//       })
//       .on('end', () => {
//         resolve(results);
//       })
//       .on('error', (error) => {
//         reject(error);
//       });
//   });
// }


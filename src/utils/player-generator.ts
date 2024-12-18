import { Player } from '../types/player'
// import fs from 'fs'
// import csv from 'csv-parser'

export function generatePlayers(count: number): Player[] {
  return [{'id': 1,
    'name': 'Rahul',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 2,
    'name': 'prasanna',
    'price': 5000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 3,
    'name': 'abhinav',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 4,
    'name': 'karan',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 5,
    'name': 'sunil',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 6,
    'name': 'machhindra',
    'price': 5000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 7,
    'name': 'arbaz',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 8,
    'name': 'amol',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 9,
    'name': 'sacsham',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 10,
    'name': 'vinod',
    'price': 5000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 11,
    'name': 'vikram',
    'price': 5000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 12,
    'name': 'rajan',
    'price': 4000,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 13,
    'name': 'pritesh',
    'price': 3000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 14,
    'name': 'ketan',
    'price': 3000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 15,
    'name': 'apeksha',
    'price': 3000,
    'gender': 'female',
    'type': 'allrounder'},
   {'id': 16,
    'name': 'alpesh',
    'price': 3000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 17,
    'name': 'salil',
    'price': 3000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 18,
    'name': 'yohan',
    'price': 3000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 19,
    'name': 'adil',
    'price': 3000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 20,
    'name': 'tarun',
    'price': 3000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 21,
    'name': 'prashat',
    'price': 3000,
    'gender': 'male',
    'type': 'allrounder'},
   {'id': 22,
    'name': 'anand',
    'price': 3000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 23,
    'name': 'vinita',
    'price': 3000,
    'gender': 'female',
    'type': 'allrounder'},
   {'id': 24,
    'name': 'shauyra',
    'price': 3000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 25,
    'name': 'parvez',
    'price': 3000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 26,
    'name': 'kartavya',
    'price': 2500,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 27,
    'name': 'adarsh',
    'price': 2500,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 28,
    'name': 'aarti',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 29,
    'name': 'apporva',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 30,
    'name': 'anusha',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 31,
    'name': 'rajat',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 32, 'name': 'yash', 'price': 1000, 'gender': 'male', 'type': 'batter'},
   {'id': 33,
    'name': 'yogesh',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 34,
    'name': 'akash',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 35,
    'name': 'mitesh',
    'price': 1000,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 36,
    'name': 'ruchi',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 37,
    'name': 'asparsh',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 38,
    'name': 'akshay',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 39,
    'name': 'dilip',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 40,
    'name': 'somesh',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 41,
    'name': 'devarsh',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 42,
    'name': 'pradnya',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 43,
    'name': 'kalash',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 44,
    'name': 'saumya',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 45,
    'name': 'sagar',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 46,
    'name': 'maitrey',
    'price': 1000,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 47,
    'name': 'jigar',
    'price': 1000,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 48,
    'name': 'bhojraj',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 49,
    'name': 'tharun',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 50,
    'name': 'sapanesh',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 51,
    'name': 'dharti',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 52,
    'name': 'prabhjot',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 53,
    'name': 'prachi',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 54,
    'name': 'chintan',
    'price': 1000,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 55,
    'name': 'hemang',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 56,
    'name': 'sandeep',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 57,
    'name': 'vandana',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 58,
    'name': 'nupura',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 59,
    'name': 'anurag',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 60,
    'name': 'chandra',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 61,
    'name': 'ganesh',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 62,
    'name': 'mihir',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 63,
    'name': 'dhiresh',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 64,
    'name': 'shini',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 65,
    'name': 'diksha',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 66,
    'name': 'priyanka',
    'price': 1000,
    'gender': 'female',
    'type': 'batter'},
   {'id': 67,
    'name': 'vinayan',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 68,
    'name': 'yashovardhan',
    'price': 1000,
    'gender': 'male',
    'type': 'bowler'},
   {'id': 69,
    'name': 'pavan',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 70,
    'name': 'dhiraj',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'},
   {'id': 71,
    'name': 'parikshit',
    'price': 1000,
    'gender': 'male',
    'type': 'batter'}]
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


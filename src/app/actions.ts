'use server'

import { Player } from '@/types/player'

export async function submitTeam(players: Player[], email: string, password: string) {
  try {
    // Encode username and password for Basic Authentication
    const url = 'https://sacshamagrawal.pythonanywhere.com';
    // const url = 'http://localhost:5001';
    const username = 'SacshamAgrawal'; // Replace with your actual username
    const apiPassword = 'abcdefgh28'; // Replace with your actual password
    const credentials = btoa(`${username}:${apiPassword}`); // Encode credentials as Base64

    // Send data to backend with authentication
    const response = await fetch(url + '/api/submit-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`, // Add Basic Auth header
      },
      body: JSON.stringify({ players, email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { success: false, error: errorData.error || "Failed to submit team. Please try again." }
    }

    // Parse and return response
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return { success: false, error: "An error occurred while submitting the team. Please try again." }
  }
}

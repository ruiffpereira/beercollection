import { Beer } from '@/types/types'

export const queryKeyBeers = ['beers']

export async function fetchBeers(): Promise<Beer[]> {
  const beersUrl = 'https://652e74c30b8d8ddac0b167be.mockapi.io/api/beers'
  const options: RequestInit = {
    method: 'GET',
  }

  const response = await fetch(beersUrl, options)

  if (!response.ok) {
    throw new Error('Failed to fetch beers')
  }

  return response.json()
}

export async function fetchBeerById(id: string): Promise<Beer> {
  const beersUrl = `https://652e74c30b8d8ddac0b167be.mockapi.io/api/beers/${id}`
  const options: RequestInit = {
    method: 'GET',
  }

  const response = await fetch(beersUrl, options)

  if (!response.ok) {
    throw new Error('Failed to fetch beer details')
  }

  return response.json()
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Beer {
  id: string
  name: string
  description: string
  abv: number
  ibu: number
  ingredients: string
  country: string
  createdAt: string
  avatar: string
  localbeer: boolean
}

interface BeerStore {
  beers: Beer[]
  addBeer: (beer: Beer) => void
  updateBeer: (updatedBeer: Beer) => void
  deleteBeer: (id: string) => void
}

export const useBeerStore = create<BeerStore>()(
  persist(
    (set) => ({
      beers: [],
      addBeer: (beer) =>
        set((state) => ({
          beers: [...state.beers, beer],
        })),
      updateBeer: (updatedBeer) =>
        set((state) => ({
          beers: state.beers.map((beer) =>
            beer.id === updatedBeer.id ? updatedBeer : beer,
          ),
        })),
      deleteBeer: (id) =>
        set((state) => ({
          beers: state.beers.filter((beer) => beer.id !== id),
        })),
    }),
    {
      name: 'beer-storage',
    },
  ),
)

'use client'

import { Beer } from '@/types/types'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

interface BeerContextType {
  beers: Beer[]
  addBeer: (beer: Beer) => void
}

const BeerContext = createContext<BeerContextType | undefined>(undefined)

export function BeerProvider({ children }: { children: ReactNode }) {
  const [beers, setBeers] = useState<Beer[]>([])

  // Carregar os dados do Local Storage no cliente
  useEffect(() => {
    const storedBeers = localStorage.getItem('beers')
    if (storedBeers) {
      setBeers(JSON.parse(storedBeers))
    }
  }, [])

  const addBeer = (beer: Beer) => {
    const updatedBeers = [...beers, beer]
    setBeers(updatedBeers)
    localStorage.setItem('beers', JSON.stringify(updatedBeers))
  }

  return (
    <BeerContext.Provider value={{ beers, addBeer }}>
      {children}
    </BeerContext.Provider>
  )
}

export function useBeerContext() {
  const context = useContext(BeerContext)
  if (!context) {
    throw new Error('useBeerContext must be used within a BeerProvider')
  }
  return context
}

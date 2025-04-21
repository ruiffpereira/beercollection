'use client'

import { useBeerContext } from '@/context/BeerContext'
import { Beer } from '@/types/types'
import BeerLayoutOnGrid from './layout-beers-grid'
import { useEffect } from 'react'

export default function ListLocalBeers() {
  const { beers } = useBeerContext()

  useEffect(() => {
    console.log('Beers updated in ListLocalBeers:', beers)
  }, [beers])

  if (!beers.length && beers.length === 0) return null

  return (
    <div className="flex flex-col gap-7 py-20 px-8 bg-gray-100 ">
      <h1 className="text-center font-bold text-5xl">My Favorite Selection</h1>
      <p className="text-center text-md mb-10">
        A curated selection of my favorite beers from around the world — each
        bottle with its own story, taste, and memory.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 p-4 w-2/3 mx-auto">
        {beers.map((beer: Beer) => (
          <div key={beer.id} className="mb-4">
            <BeerLayoutOnGrid beer={beer} />
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchBeers, queryKeyBeers } from '@/api/fetchBeers'
import { Beer } from '@/types/types'
import BeerLayoutOnGrid from './layout-beer-on-grid'

export default function ListBeers() {
  const {
    data: beers,
    isLoading,
    error,
  } = useQuery({
    queryKey: queryKeyBeers,
    queryFn: fetchBeers,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching beers</div>

  return (
    <div className="flex flex-col gap-7 py-20 bg-gray-100">
      <h1 className="text-center font-bold text-5xl">Hop Selection</h1>
      <p className="text-center text-md mb-10">
        A curated selection of my favorite beers from around the world — each
        bottle with its own story, taste, and memory.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-4 w-2/3 mx-auto">
        {beers?.map((beer: Beer) => (
          <div key={beer.id}>
            <BeerLayoutOnGrid beer={beer} />
          </div>
        ))}
      </div>
    </div>
  )
}

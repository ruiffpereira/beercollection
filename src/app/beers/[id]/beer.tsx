'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchBeerById, queryKeyBeers } from '@/api/fetchBeers'
import BeerDetails from '@/components/beer-components/beer-details'

export default function BeerPage({ id }: { id: string }) {
  const {
    data: beer,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [queryKeyBeers, id],
    queryFn: () => fetchBeerById(id),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading beer details</div>
  if (!beer) return <div>No beer found</div>

  return (
    <>
      <BeerDetails beer={beer} />
    </>
  )
}

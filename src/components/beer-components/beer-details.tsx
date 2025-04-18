'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchBeerById } from '@/api/fetchBeers'
import Image from 'next/image'

export default function BeerDetails({ id }: { id: string }) {
  const {
    data: beer,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['beers', id],
    queryFn: () => fetchBeerById(id),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading beer details</div>
  if (!beer) return <div>No beer found</div>

  console.log(beer)
  return (
    <div className="w-full bg-zinc-100 p-8 flex-grow">
      <div className=" max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{beer.name}</h1>
        <p className="text-gray-700 mb-4">{beer.description}</p>
        <div className="flex gap-4">
          <Image
            src={beer.avatar}
            alt={beer.name}
            className="w-48 h-48 object-cover rounded-lg mb-4"
            width={400}
            height={400}
          />
          <div>
            <h2 className="text-xl font-semibold">Details</h2>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Country:</span>
                <span>{beer.country}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Alcohol By Volume:</span>
                <span>{beer.abv}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Date of Fabric:</span>
                <span>
                  {new Date(beer.createdAt).toLocaleDateString('pt-pt', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

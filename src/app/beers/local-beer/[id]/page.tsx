'use client'

import { use } from 'react'
import BeerDetails from '@/components/beer-components/beer-details'
import { useBeerStore } from '@/store/beerStore'

export default function BeerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params)
  const { beers } = useBeerStore()

  const beer = beers.find((b) => b.id === resolvedParams.id)

  if (!beers.length) {
    return (
      <div className="w-full bg-zinc-100 p-8 flex-grow">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">Loading Beer</h1>
        </div>
      </div>
    )
  }

  if (!beer) {
    return (
      <div className="w-full bg-zinc-100 p-8 flex-grow">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">Beer Not Found</h1>
          <p className="text-gray-600">
            The beer you are looking for does not exist.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-zinc-100 p-8 flex-grow">
      <div className="max-w-6xl mx-auto">
        <BeerDetails beer={beer} />
      </div>
    </div>
  )
}

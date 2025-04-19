'use client'

import { use } from 'react'
import { useBeerContext } from '@/context/BeerContext'
import BeerDetails from '@/components/beer-components/beer-details'

export default function BeerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params) // Resolve a Promise de params
  const { beers } = useBeerContext() // Acessa as cervejas do contexto

  const beer = beers.find((b) => b.id === resolvedParams.id) // Busca a cerveja pelo ID

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

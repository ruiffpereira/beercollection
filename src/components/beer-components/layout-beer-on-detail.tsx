'use client'

import { Beer } from '@/types/types'

// Componente BeerLayout
export default function BeerLayoutOnDetail({ beer }: { beer: Beer }) {
  return (
    <div className="w-full flex flex-col gap-4 items-center ">
      <div className="beer-glass">
        <div className="beer-foam"></div>
        <div className="beer-liquid"></div>
      </div>
      <h1 className="text-3xl font-bold mb-4">{beer.name}</h1>
      <p className="text-gray-700 mb-4">{beer.description}</p>
    </div>
  )
}

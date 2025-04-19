'use client'

import Image from 'next/image'
import { Beer } from '@/types/types'

export default function BeerDetails({ beer }: { beer: Beer }) {
  return (
    <>
      <div className="flex gap-8 flex-col">
        <h1 className="text-3xl font-bold">{beer.name}</h1>
        <div className="flex gap-4">
          <Image
            src={beer.avatar}
            alt={beer.name}
            className="w-48 h-48 object-cover rounded-lg flex-shrink-0"
            width={400}
            height={400}
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{beer.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Country</span>
            <span>{beer.country}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Alcohol By Volume</span>
            <span>{beer.abv}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Bitterness Units</span>
            <span>{beer.ibu}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Date of Fabric</span>
            <span>
              {new Date(beer.createdAt).toLocaleDateString('en-uk', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

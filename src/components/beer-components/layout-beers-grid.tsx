'use client'

import Image from 'next/image'
import { Beer } from '@/types/types'
import Link from 'next/link'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import routes from '@/routes/router'

// Componente BeerLayout
export default function BeerLayoutOnGrid({ beer }: { beer: Beer }) {
  const isLocalBeer = beer.localbeer ?? false
  return (
    <div>
      <Link
        href={
          isLocalBeer
            ? routes.beerLocalDetails(beer.id)
            : routes.beerDBDetails(beer.id)
        }
      >
        <div className=" rounded-lg cursor-pointer">
          <div className="relative group">
            <Image
              style={{
                clipPath: 'polygon(20% 0, 80% 0, 70% 100%, 30% 100%)',
              }}
              src={beer.avatar}
              alt={beer.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-opacity duration-300 group-hover:opacity-50"
              width={400}
              height={400}
            />
            <div
              style={{
                clipPath: 'polygon(20% 0, 80% 0, 70% 100%, 30% 100%)',
              }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"
            ></div>
            <div
              style={{
                clipPath: 'polygon(20% 0, 80% 0, 70% 100%, 30% 100%)',
              }}
              className="absolute inset-0 text-lg font-bold hidden group-hover:flex items-center justify-center transition-opacity duration-300"
            >
              <div className="h-12 px-4 grid place-items-center bg-white rounded-sm text-sm">
                <span>
                  View Details
                  <TrendingFlatIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <h2 className="text-md font-semibold text-center">{beer.name}</h2>
      <p className="text-gray-700 text-sm text-center">{beer.description}</p>
    </div>
  )
}

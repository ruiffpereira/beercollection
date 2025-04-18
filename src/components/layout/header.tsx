'use client'

import routes from '@/routes/router'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="text-gray-800 flex-shrink-0 p-4">
      <div className="flex max-w-6xl mx-auto items-center gap-4">
        <button
          className="md:hidden text-gray-800 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
        <div className="flex items-center gap-2 text-2xl">
          <div className="hidden md:block">
            <LocalDrinkIcon className="text-2xl " />
          </div>
          <Link href={routes.home}>
            <span className="font-bold cursor-pointer">My Beer Collection</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-4 items-center ml-auto">
          <Link href={routes.addBeer}>
            <span className="text-md font-bold flex items-center gap-2 relative group cursor-pointer border rounded-sm px-4 h-9 bg-amber-200 hover:bg-amber-50">
              Add Your Beer!
            </span>
          </Link>
          <Link href={routes.beers}>
            <span className="relative group cursor-pointer text-md font-bold">
              Beers
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link href={routes.collections}>
            <span className="relative group cursor-pointer text-md font-bold">
              Collections
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link href={routes.about}>
            <span className="relative group cursor-pointer text-md font-bold">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-4/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            className="text-gray-800 focus:outline-none mb-4 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col gap-4">
            <Link href={routes.addBeer} onClick={() => setIsMenuOpen(false)}>
              <span className="text-md flex-grow-0 w-fit font-bold flex items-center gap-2 relative group cursor-pointer border rounded-sm px-4 h-9 bg-amber-200 hover:bg-amber-50">
                Add Your Beer!
              </span>
            </Link>
            <Link href={routes.home} onClick={() => setIsMenuOpen(false)}>
              <span className="relative group cursor-pointer text-md font-bold">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href={routes.beers} onClick={() => setIsMenuOpen(false)}>
              <span className="relative group cursor-pointer text-md font-bold">
                Beers
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href={routes.collections}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative group cursor-pointer text-md font-bold">
                Collections
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href={routes.about} onClick={() => setIsMenuOpen(false)}>
              <span className="relative group cursor-pointer text-md font-bold">
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

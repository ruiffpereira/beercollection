import { Collection } from '@/types/types'

export const queryKeyCollections = ['collections']

export async function fetchCollections(): Promise<Collection[]> {
  const dummyCollections: Collection[] = [
    {
      id: '1',
      name: 'Craft Beers',
      description: 'A selection of the finest craft beers.',
    },
    {
      id: '2',
      name: 'Seasonal Specials',
      description: 'Beers brewed for special occasions and seasons.',
    },
    {
      id: '3',
      name: 'International Beers',
      description: 'Beers from around the world.',
    },
    {
      id: '4',
      name: 'Local Favorites',
      description: 'Popular beers from local breweries.',
    },
    {
      id: '5',
      name: 'Limited Editions',
      description: 'Exclusive beers available for a limited time.',
    },
  ]

  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyCollections), 500)
  })
}

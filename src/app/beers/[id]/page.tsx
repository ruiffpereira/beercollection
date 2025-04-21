import { getQueryClient } from '@/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { fetchBeerById, queryKeyBeers } from '@/api/fetchBeers'
import BeerDetails from '@/components/beer-components/beer-details'

export default async function Beer({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const queryClient = getQueryClient()

  try {
    // Busca a cerveja pelo ID
    const beer = await queryClient.fetchQuery({
      queryKey: [queryKeyBeers, id],
      queryFn: () => fetchBeerById(id),
    })

    if (!beer) {
      // Caso a cerveja não seja encontrada
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

    const dehydratedState = dehydrate(queryClient)

    return (
      <HydrationBoundary state={dehydratedState}>
        <div className="w-full bg-zinc-100 p-8 flex-grow">
          <div className="max-w-6xl mx-auto">
            <BeerDetails beer={beer} />
          </div>
        </div>
      </HydrationBoundary>
    )
  } catch (error) {
    console.error('Error fetching beer:', error)
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
}

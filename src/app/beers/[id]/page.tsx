import { getQueryClient } from '@/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { fetchBeerById, queryKeyBeers } from '@/api/fetchBeers'
import BeerPage from './beer'

export default async function Beer({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const queryClient = getQueryClient()

  // Prefetch da cerveja com o ID
  await queryClient.prefetchQuery({
    queryKey: [queryKeyBeers, id],
    queryFn: () => fetchBeerById(id),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="w-full bg-zinc-100 p-8 flex-grow">
        <div className=" max-w-6xl mx-auto">
          <BeerPage id={id} />
        </div>
      </div>
    </HydrationBoundary>
  )
}

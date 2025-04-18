import { getQueryClient } from '@/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { fetchBeerById, queryKeyBeers } from '@/api/fetchBeers'
import BeerDetails from '@/components/beer-components/beer-details'

export default async function BeerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log('BeerPage', id)

  const queryClient = getQueryClient()

  // Prefetch da cerveja com o ID
  await queryClient.prefetchQuery({
    queryKey: [queryKeyBeers, id],
    queryFn: () => fetchBeerById(id),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <BeerDetails id={id} />
    </HydrationBoundary>
  )
}

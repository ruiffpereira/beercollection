import { getQueryClient } from '@/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { fetchBeers, queryKeyBeers } from '@/api/fetchBeers'
import ListBeers from '@/components/beer-components/list-api-beers'
import ListComments from '@/components/list-comments'
import ListLocalBeers from '@/components/beer-components/list-local-beers'
import Banner from '@/components/layout/banner'
import { fetchComments, queryKeyComments } from '@/api/fetchComments'

export default async function Homeas() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: queryKeyBeers,
    queryFn: fetchBeers,
  })

  await queryClient.prefetchQuery({
    queryKey: queryKeyComments,
    queryFn: fetchComments,
  })

  return (
    <>
      <Banner />
      <div className="flex-grow overflow-auto">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ListBeers />
          <ListComments />
        </HydrationBoundary>
        <ListLocalBeers />
      </div>
    </>
  )
}

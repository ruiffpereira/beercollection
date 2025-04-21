import AddBeerForm from '@/components/beer-components/add-beer'
import { BeerProvider } from '@/context/BeerContext'

export default async function AddBeer({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const { id } = resolvedParams

  return (
    <BeerProvider>
      <AddBeerForm id={id} />
    </BeerProvider>
  )
}

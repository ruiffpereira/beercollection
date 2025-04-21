import AddBeerForm from '@/components/beer-components/add-beer'

export default async function AddBeer({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const { id } = resolvedParams

  return <AddBeerForm id={id} />
}

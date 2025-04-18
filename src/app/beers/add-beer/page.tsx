import AddBeerForm from '@/components/beer-components/add-beer'
import { BeerProvider } from '@/context/BeerContext'

export default function AddBeer() {
  return (
    <BeerProvider>
      <AddBeerForm />
    </BeerProvider>
  )
}

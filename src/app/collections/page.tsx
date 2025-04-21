import ListLocalBeers from '@/components/beer-components/list-local-beers'

export default function Collections() {
  return (
    <div>
      <div className="flex-grow flex items-center min-h-[60vh] p-8">
        <div className="max-w-6xl mx-auto flex items-center gap-2 md:gap-8 md:flex-row flex-col">
          <div className="flex-grow order-2 md:order-1">
            <h1 className="text-3xl  md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
              Welcome to My Beer Collection
            </h1>
            <p className="text-sm md:text-lg text-gray-600 text-center md:text-left mb-4">
              Discover a diverse range of beers from around the world — perfect
              for every taste and occasion. Embark on a flavorful journey
              through our curated collection of beers, handpicked from renowned
              breweries and hidden gems across the globe.
            </p>
          </div>
        </div>
      </div>
      <ListLocalBeers />
    </div>
  )
}

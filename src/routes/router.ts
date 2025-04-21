const routes = {
  home: '/',
  addBeer: (id: string | number) => `/beers/add-beer/${id}`,
  beers: '/beers',
  collections: '/collections',
  about: '/about',
  beerDBDetails: (id: string | number) => `/beers/${id}`,
  beerLocalDetails: (id: string | number) => `/beers/local-beer/${id}`,
}

export type Routes = typeof routes

export default routes

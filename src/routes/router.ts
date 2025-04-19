const routes = {
  home: '/',
  addBeer: '/beers/add-beer',
  beers: '/beers',
  collections: '/collections',
  about: '/about',
  beerDBDetails: (id: string | number) => `/beers/${id}`, // Rota dinâmica
  beerLocalDetails: (id: string | number) => `/beers/local-beer/${id}`, // Rota dinâmica
}

export type Routes = typeof routes

export default routes

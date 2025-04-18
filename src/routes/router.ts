const routes = {
  home: '/',
  addBeer: '/beers/add-beer',
  beers: '/beers',
  collections: '/collections',
  about: '/about',
  beerDetails: (id: string | number) => `/beers/${id}`, // Rota dinâmica
}

export type Routes = typeof routes

export default routes

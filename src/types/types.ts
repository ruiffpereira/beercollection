// Definição do tipo para uma cerveja individual
export interface Beer {
  id: string
  name: string
  avatar: string
  createdAt: string
  description: string
  abv: number
  country: string
  ibu: number
  localbeer: boolean
}

// Definição do tipo para uma coleção individual
export interface Collection {
  id: string
  name: string
  description: string
}

// Definição do tipo para um comentário individual
export interface Comment {
  id: string
  name: string
  avatar: string
  createdAt: string
  comment: string
}

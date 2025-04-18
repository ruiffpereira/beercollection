import { Comment } from '../types/types'

// Query key para React Query
export const queryKeyComments = ['comments']

// Função para buscar todos os comentários
export async function fetchComments(): Promise<Comment[]> {
  const commentsUrl = 'https://652e74c30b8d8ddac0b167be.mockapi.io/api/comments'
  const options: RequestInit = {
    method: 'GET',
  }

  const response = await fetch(commentsUrl, options)

  if (!response.ok) {
    throw new Error('Failed to fetch comments')
  }

  return response.json()
}

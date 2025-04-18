'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from './get-query-client'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  )
}

import { useQuery } from 'react-query'
import { api } from '../../../services/ApiConnection'
import { Product } from './types'

async function fetchGetProducts(): Promise<Product[]> {
  const { data } = await api.get(`/products`)

  return data
}

export function useGetProducts() {
  const { data, isLoading, error } = useQuery(
    ['products'],
    () => fetchGetProducts(),
    { refetchOnWindowFocus: false }
  )

  return {
    data,
    isLoading,
    error
  }
}

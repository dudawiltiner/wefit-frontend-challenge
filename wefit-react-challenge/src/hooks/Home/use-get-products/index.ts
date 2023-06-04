import { api } from '@services/ApiConnection';
import { useQuery } from 'react-query';
import { Product } from './types';

async function fetchGetProducts(title?: string): Promise<Product[]> {
  const request =
    title && title !== '' ? `/products?title=${title}` : '/products';
  const { data } = await api.get(request);

  return data;
}

export function useGetProducts(title?: string) {
  const { data, isLoading, error } = useQuery(
    ['products', title],
    () => fetchGetProducts(title),
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isLoading,
    error,
  };
}

import { Product } from '@hooks/Home/use-get-products/types';

export interface CardProps {
  product: Product;
  selectedProductsQtd: number;
  selected: boolean;
  handleSelect: () => void;
}

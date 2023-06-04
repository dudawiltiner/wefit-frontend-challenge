import { Product } from '@hooks/Home/use-get-products/types';

export interface ItemProps {
  selectedProductsQtd: number;
  product: Product;
  handleSub: () => void;
  handleAdd: () => void;
  handleRemoveAll: () => void;
}

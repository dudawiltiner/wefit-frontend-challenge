import { productsSelectedAt } from '@store/index';
import { useAtom } from 'jotai';
import { useGetProducts } from '../use-get-products';

export function useTableCart() {
  const { data } = useGetProducts();
  const [productsSelected, setProductsSelected] = useAtom(productsSelectedAt);

  function removeItem(id: number) {
    const list = productsSelected;

    list.splice(list.indexOf(id), 1);

    setProductsSelected([...list]);
  }

  function addItem(id: number) {
    setProductsSelected([...productsSelected, id]);
  }

  function removeAllItens(id: number) {
    setProductsSelected([...productsSelected.filter((el) => el !== id)]);
  }

  function getFilteredSelectedProductsQtd(id: number) {
    return productsSelected.filter((el) => el === id).length;
  }

  function calculateTotalValue() {
    let totalValue = 0;

    data?.forEach((product) => {
      const filteredSelectedProductsQtd = getFilteredSelectedProductsQtd(
        product.id
      );

      if (filteredSelectedProductsQtd) {
        totalValue += filteredSelectedProductsQtd * product.price;
      }
    });

    return totalValue;
  }

  return {
    data,
    removeItem,
    addItem,
    removeAllItens,
    calculateTotalValue,
    getFilteredSelectedProductsQtd,
  };
}

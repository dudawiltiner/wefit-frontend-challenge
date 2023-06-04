import CartInfoScreen from '@components/organisms/ShoppingCart/CartInfoScreen';
import TableCart from '@components/organisms/ShoppingCart/TableCart';
import { productsSelectedAt } from '@store/index';
import { useAtom } from 'jotai';

export default function ShoppingCartTemplate() {
  const [productsSelected] = useAtom(productsSelectedAt);

  return (
    <div>
      {productsSelected.length === 0 ? <CartInfoScreen /> : <TableCart />}
    </div>
  );
}

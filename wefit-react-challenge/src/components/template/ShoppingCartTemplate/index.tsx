import { useAtom } from 'jotai'
import { productsSelectedAt } from '../../../store'
import CartInfoScreen from '../../organisms/ShoppingCart/CartInfoScreen'
import TableCart from '../../organisms/ShoppingCart/TableCart'

export default function ShoppingCartTemplate() {
  const [productsSelected] = useAtom(productsSelectedAt)

  return (
    <div>
      {productsSelected.length === 0 ? <CartInfoScreen /> : <TableCart />}
    </div>
  )
}

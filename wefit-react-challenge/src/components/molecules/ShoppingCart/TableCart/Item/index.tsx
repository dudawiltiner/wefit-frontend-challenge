import { CardPrice } from '@components/atoms/Home/Cards';
import { InputNumber, Product } from '@components/atoms/ShoppingCart/TableCart';
import * as S from './styles';
import { ItemProps } from './types';

export default function Item({
  product,
  selectedProductsQtd,
  handleSub,
  handleAdd,
  handleRemoveAll,
}: ItemProps) {
  return (
    <tr>
      <td>
        <Product
          image={product.image}
          title={product.title}
          price={product.price}
        />
      </td>
      <td>
        <InputNumber
          handleSub={handleSub}
          handleAdd={handleAdd}
          value={selectedProductsQtd}
        />
      </td>
      <S.Price>
        <CardPrice number={selectedProductsQtd * product.price} />
      </S.Price>
      <td>
        <S.RemoveButton onClick={handleRemoveAll}>
          <img src="src/assets/trash.png" />
        </S.RemoveButton>
      </td>
    </tr>
  );
}

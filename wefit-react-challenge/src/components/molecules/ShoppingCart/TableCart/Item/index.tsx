import { CardPrice } from '../../../../atoms/Home/Cards'
import { InputNumber, Product } from '../../../../atoms/ShoppingCart/TableCart'
import * as S from './styles'
import { ItemProps } from './types'

export default function Item({
  image,
  title,
  qtd,
  price,
  handleSub,
  handleAdd,
  handleRemoveAll
}: ItemProps) {
  return (
    <tr>
      <td>
        <Product image={image} title={title} price={price} />
      </td>
      <td>
        <InputNumber handleSub={handleSub} handleAdd={handleAdd} value={qtd} />
      </td>
      <S.Price>
        <CardPrice number={qtd * price} />
      </S.Price>
      <td>
        <button
          onClick={handleRemoveAll}
          style={{
            display: 'flex',
            justifyContent: 'end',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <img src="src/assets/trash.png" />
        </button>
      </td>
    </tr>
  )
}

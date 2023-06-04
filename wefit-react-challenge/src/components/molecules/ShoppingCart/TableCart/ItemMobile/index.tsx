import { CardImage, CardPrice } from '../../../../atoms/Home/Cards';
import {
  Description,
  InputNumber,
} from '../../../../atoms/ShoppingCart/TableCart';
import * as S from './styles';
import { ItemProps } from './types';

export default function ItemMobile({
  image,
  title,
  qtd,
  price,
  handleSub,
  handleAdd,
  handleRemoveAll,
}: ItemProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <CardImage link={image} />
      </S.ImageContainer>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginLeft: '16px',
        }}
      >
        <S.TitleAndPriceContainer>
          <S.Title>{title}</S.Title>
          <CardPrice number={price} />
          <button
            onClick={handleRemoveAll}
            style={{
              display: 'flex',
              justifyContent: 'end',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img src="src/assets/trash.png" />
          </button>
        </S.TitleAndPriceContainer>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <InputNumber
            handleSub={handleSub}
            handleAdd={handleAdd}
            value={qtd}
          />
          <S.Price>
            <Description name="SUBTOTAL" />
            <CardPrice number={qtd * price} />
          </S.Price>
        </div>
      </div>
    </S.Container>
  );
}

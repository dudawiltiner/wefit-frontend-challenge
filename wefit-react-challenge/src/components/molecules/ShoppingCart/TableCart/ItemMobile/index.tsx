import { CardImage, CardPrice } from '@components/atoms/Home/Cards';
import {
  Description,
  InputNumber,
} from '@components/atoms/ShoppingCart/TableCart';
import * as S from './styles';
import { ItemProps } from './types';

export default function ItemMobile({
  product,
  selectedProductsQtd,
  handleSub,
  handleAdd,
  handleRemoveAll,
}: ItemProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <CardImage link={product.image} />
      </S.ImageContainer>
      <S.Wrapper>
        <S.TitleAndPriceContainer>
          <S.Title>{product.title}</S.Title>
          <CardPrice number={product.price} />
          <S.RemoveButton onClick={handleRemoveAll}>
            <img src="src/assets/trash.png" />
          </S.RemoveButton>
        </S.TitleAndPriceContainer>
        <S.WrapperDescription>
          <InputNumber
            handleSub={handleSub}
            handleAdd={handleAdd}
            value={selectedProductsQtd}
          />
          <S.Price>
            <Description name="SUBTOTAL" />
            <CardPrice number={selectedProductsQtd * product.price} />
          </S.Price>
        </S.WrapperDescription>
      </S.Wrapper>
    </S.Container>
  );
}

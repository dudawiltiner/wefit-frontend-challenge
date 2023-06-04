import {
  CardButton,
  CardImage,
  CardPrice,
  CardTitle,
} from '@components/atoms/Home/Cards';
import * as S from './styles';
import { CardProps } from './types';

export default function Card({
  handleSelect,
  product,
  selectedProductsQtd,
  selected,
}: CardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <CardImage link={product.image} />
      </S.ImageContainer>
      <CardTitle name={product.title} />
      <CardPrice number={product.price} />
      <CardButton
        onClick={handleSelect}
        number={selectedProductsQtd}
        name="ADICIONAR AO CARRINHO"
        selected={selected}
      />
    </S.Container>
  );
}

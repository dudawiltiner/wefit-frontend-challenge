import { CardImage, CardPrice, CardTitle } from '../../../Home/Cards';
import * as S from './styles';
import { ProductProps } from './types';

export default function Product({ image, title, price }: ProductProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <CardImage link={image} />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <CardTitle name={title} />
        <CardPrice number={price} />
      </S.DescriptionContainer>
    </S.Container>
  );
}

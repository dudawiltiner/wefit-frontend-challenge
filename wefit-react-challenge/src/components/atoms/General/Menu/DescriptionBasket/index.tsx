import * as S from './styles';
import { DescriptionBasketProps } from './types';

export default function DescriptionBasket({ name }: DescriptionBasketProps) {
  return <S.DescriptionStyled>{name}</S.DescriptionStyled>;
}

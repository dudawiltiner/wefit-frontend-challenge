import * as S from './styles';
import { BuyButtonProps } from './types';

export default function BuyButton({ name }: BuyButtonProps) {
  return <S.BuyButtonStyled to="/purchasemade">{name}</S.BuyButtonStyled>;
}

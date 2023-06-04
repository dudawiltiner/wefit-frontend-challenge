import * as S from './styles';
import { CardPriceProps } from './types';

export default function CardPrice({ number }: CardPriceProps) {
  return (
    <S.PriceStyled id="price">{`R$ ${number.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`}</S.PriceStyled>
  );
}

import * as S from './styles';
import { TotalTextProps } from './types';

export default function TotalText({ number }: TotalTextProps) {
  return (
    <S.TotalTextStyled>{`R$ ${number.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`}</S.TotalTextStyled>
  );
}

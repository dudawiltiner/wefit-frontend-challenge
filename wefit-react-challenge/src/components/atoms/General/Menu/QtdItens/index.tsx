import * as S from './styles';
import { QtdItensProps } from './types';

export default function QtdItens({ number }: QtdItensProps) {
  return <S.QtdItensStyled>{`${number} itens`}</S.QtdItensStyled>;
}

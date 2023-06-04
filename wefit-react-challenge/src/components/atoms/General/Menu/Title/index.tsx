import * as S from './styles';
import { TitleProps } from './types';

export default function Title({ name }: TitleProps) {
  return <S.TitleStyled to="/">{name}</S.TitleStyled>;
}

import * as S from './styles';
import { ScreenButtonProps } from './types';

export default function ScreenButton({ name, link }: ScreenButtonProps) {
  return <S.ScreenButtonStyled to={link}>{name}</S.ScreenButtonStyled>;
}

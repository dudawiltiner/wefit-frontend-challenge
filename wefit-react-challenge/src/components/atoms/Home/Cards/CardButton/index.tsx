import * as S from './styles';
import { CardButtonProps } from './types';

export default function CardButton({
  onClick,
  selected,
  number,
  name,
}: CardButtonProps) {
  return (
    <S.ButtonStyled selected={selected} type="button" onClick={onClick}>
      <img src="src/assets/car.png" alt="Button Icon" />
      <p>{number}</p>
      <p>{name}</p>
    </S.ButtonStyled>
  );
}

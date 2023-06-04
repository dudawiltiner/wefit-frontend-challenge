import * as S from './styles';
import { InputProps } from './types';

export default function InputNumber({
  value,
  handleSub,
  handleAdd,
}: InputProps) {
  return (
    <S.Container>
      <button onClick={handleSub}>
        <img src="src/assets/sub.png" alt="Sub Input" />
      </button>
      <S.InputStyled>{value}</S.InputStyled>
      <button onClick={handleAdd}>
        <img src="src/assets/add.png" alt="Add Input" />
      </button>
    </S.Container>
  );
}

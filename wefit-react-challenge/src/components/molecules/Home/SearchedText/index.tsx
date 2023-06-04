import * as S from './styles';
import { SearchProps } from './types';

export default function SearchedText({ searchQuery, qtd }: SearchProps) {
  return (
    <S.Container>
      <p>{`Exibindo resultados para ”${searchQuery}”`}</p>
      <p className="result-text">{`${qtd} resultado encontrado`}</p>
    </S.Container>
  );
}

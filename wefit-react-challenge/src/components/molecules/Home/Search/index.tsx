import { useSearch } from '@hooks/Home/use-search';
import * as S from './styles';
import { SearchProps } from './types';

export default function Search({ searchQuery }: SearchProps) {
  const {
    focus,
    search,
    handleBlur,
    handleFocus,
    handleChangeInput,
    handleKeyDown,
    goSearch,
  } = useSearch(searchQuery);

  return (
    <S.Container focus={focus}>
      <S.Input
        placeholder="Buscar filme pelo nome"
        type={'text'}
        value={search}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      <S.SearchButton type="button" onClick={goSearch}>
        <img
          src={
            search === searchQuery ? '/assets/close.svg' : '/assets/search.svg'
          }
        />
      </S.SearchButton>
    </S.Container>
  );
}

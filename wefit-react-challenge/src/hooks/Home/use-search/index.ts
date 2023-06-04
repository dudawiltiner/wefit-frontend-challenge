import { formatSearchToUrl } from '@utils/formatSearchToUrl';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearch(searchQuery: string | null) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  function clearIpuntSearch() {
    setSearch('');
    navigate('/');
  }

  function goSearch() {
    if (search === searchQuery) {
      clearIpuntSearch();
    } else if (search.trim() === '') {
      navigate('/');
    } else {
      navigate(`/search?search-query=${formatSearchToUrl(search)}`);
    }
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      return navigate(
        search.trim() === ''
          ? '/'
          : `/search?search-query=${formatSearchToUrl(search)}`
      );
    }
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return {
    focus,
    search,
    handleBlur,
    handleChangeInput,
    handleFocus,
    handleKeyDown,
    goSearch,
  };
}

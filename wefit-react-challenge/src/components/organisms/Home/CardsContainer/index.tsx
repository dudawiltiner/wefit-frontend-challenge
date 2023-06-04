import LoadingImage from '@components/atoms/General/Loading/LoadingImage';
import Card from '@components/molecules/Home/Card';
import { useGetProducts } from '@hooks/Home/use-get-products';
import { productsSelectedAt } from '@store/index';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './styles';

export default function CardsContainer() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);
  const { data, isLoading } = useGetProducts(
    searchParams.get('search-query') ?? ''
  );

  function format(phrase: string) {
    const searchWithOutSpace = phrase?.trimEnd().trimStart();
    const formattedSearch = searchWithOutSpace?.replace(' ', '+').trim();

    return formattedSearch;
  }

  function clear() {
    setSearch('');
    navigate('/');
  }

  const [productsSelected, setProductsSelected] = useAtom(productsSelectedAt);

  return (
    <S.Container>
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '960px',
          borderRadius: '8px',
          backgroundColor: '#FFFF',
          border: focus ? '2px solid #009EDD' : '2px solid #FFFF',
        }}
      >
        <S.Input
          placeholder="Buscar filme pelo nome"
          type={'text'}
          value={search}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' &&
            navigate(
              search.trim() === ''
                ? '/'
                : `/search?search-query=${format(search)}`
            )
          }
        />
        <button
          type="button"
          style={{
            width: '56px',
            height: '52px',
            cursor: 'pointer',
            borderRadius: '0px 8px 8px 0px',
            backgroundColor: '#FFFF',
            border: '0px',
          }}
          onClick={() =>
            search === searchParams.get('search-query')
              ? clear()
              : search.trim() === ''
              ? navigate('/')
              : navigate(`/search?search-query=${format(search)}`)
          }
        >
          <img
            src={
              search === searchParams.get('search-query')
                ? '/assets/close.svg'
                : '/assets/search.svg'
            }
          />
        </button>
      </div>
      {searchParams.get('search-query') && (
        <S.SearchedText>
          <p>
            {`Exibindo resultados para ”${searchParams.get('search-query')}”`}
          </p>
          <p
            style={{ fontWeight: 700 }}
          >{`${data?.length} resultado encontrado`}</p>
        </S.SearchedText>
      )}
      {isLoading ? (
        <div
          style={{
            width: '100%',
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '960px',
          }}
        >
          <LoadingImage />
        </div>
      ) : (
        <S.Wrapper>
          {data?.map((product) => (
            <Card
              key={product.id}
              link={product.image}
              title={product.title}
              price={product.price}
              handleSelect={() =>
                setProductsSelected([...productsSelected, product.id])
              }
              selected={
                productsSelected.filter((el) => el === product.id).length !== 0
              }
              qtd={productsSelected.filter((el) => el === product.id).length}
            />
          ))}
        </S.Wrapper>
      )}
    </S.Container>
  );
}

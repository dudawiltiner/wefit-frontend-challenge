import LoadingImage from '@components/atoms/General/Loading/LoadingImage';
import Card from '@components/molecules/Home/Card';
import Search from '@components/molecules/Home/Search';
import SearchedText from '@components/molecules/Home/SearchedText';
import { useGetProducts } from '@hooks/Home/use-get-products';
import { productsSelectedAt } from '@store/index';
import { useAtom } from 'jotai';
import { useSearchParams } from 'react-router-dom';
import * as S from './styles';

export default function CardsContainer() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search-query');
  const { data, isLoading } = useGetProducts(searchQuery ?? '');
  const [productsSelected, setProductsSelected] = useAtom(productsSelectedAt);

  return (
    <S.Container>
      <Search searchQuery={searchQuery} />
      {searchQuery && (
        <SearchedText searchQuery={searchQuery} qtd={data ? data?.length : 0} />
      )}
      {isLoading ? (
        <S.LoadingContainer>
          <LoadingImage />
        </S.LoadingContainer>
      ) : (
        <S.Wrapper>
          {data?.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleSelect={() =>
                setProductsSelected([...productsSelected, product.id])
              }
              selected={
                productsSelected.filter((el) => el === product.id).length !== 0
              }
              selectedProductsQtd={
                productsSelected.filter((el) => el === product.id).length
              }
            />
          ))}
        </S.Wrapper>
      )}
    </S.Container>
  );
}

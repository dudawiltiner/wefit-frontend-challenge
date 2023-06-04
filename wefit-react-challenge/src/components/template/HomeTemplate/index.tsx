import Loading from '@components/molecules/General/Loading';
import CardsContainer from '@components/organisms/Home/CardsContainer';
import { useGetProducts } from '@hooks/Home/use-get-products';

export default function HomeTemplate() {
  const { isLoading } = useGetProducts();

  return <div>{isLoading ? <Loading /> : <CardsContainer />}</div>;
}

import { useGetProducts } from '../../../hooks/Home/use-get-products'
import Loading from '../../molecules/General/Loading'
import CardsContainer from '../../organisms/Home/CardsContainer'

export default function HomeTemplate() {
  const { isLoading } = useGetProducts()

  return <div>{isLoading ? <Loading /> : <CardsContainer />}</div>
}

import { useAtom } from 'jotai'
import { useGetProducts } from '../../../../hooks/Home/use-get-products'
import { productsSelectedAt } from '../../../../store'
import Card from '../../../molecules/Home/Card'
import * as S from './styles'

export default function CardsContainer() {
  const { data } = useGetProducts()

  const [productsSelected, setProductsSelected] = useAtom(productsSelectedAt)

  return (
    <S.Container>
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
    </S.Container>
  )
}

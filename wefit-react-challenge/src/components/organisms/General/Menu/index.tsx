import { useAtom } from 'jotai'
import { productsSelectedAt } from '../../../../store'
import { Title } from '../../../atoms/General/Menu'
import BasketStatus from '../../../molecules/General/Menu/BasketStatus'
import * as S from './styles'

export default function Menu() {
  const [productsSelected] = useAtom(productsSelectedAt)

  return (
    <S.Container>
      <S.Wrapper>
        <Title name="WeMovies" />
        <BasketStatus qtd={productsSelected.length} />
      </S.Wrapper>
    </S.Container>
  )
}

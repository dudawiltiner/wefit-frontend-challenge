import {
  BuyButton,
  Description,
  TotalText
} from '../../../../atoms/ShoppingCart/TableCart'
import * as S from './styles'
import { FooterProps } from './types'

export default function Footer({ total }: FooterProps) {
  return (
    <S.Container>
      <hr />
      <S.Wrapper>
        <BuyButton name="FINALIZAR PEDIDO" />
        <S.WrapperTotal>
          <Description name="TOTAL" />
          <TotalText number={total} />
        </S.WrapperTotal>
      </S.Wrapper>
    </S.Container>
  )
}

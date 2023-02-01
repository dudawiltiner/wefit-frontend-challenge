import * as S from './styles'
import { CardPriceProps } from './types'

export default function CardPrice({ number }: CardPriceProps) {
  return (
    <S.PriceStyled id="price">{`R$ ${number.toLocaleString(
      'pt-br'
    )}`}</S.PriceStyled>
  )
}

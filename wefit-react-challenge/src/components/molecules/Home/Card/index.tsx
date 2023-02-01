import {
  CardButton,
  CardImage,
  CardPrice,
  CardTitle
} from '../../../atoms/Home/Cards'
import * as S from './styles'
import { CardProps } from './types'

export default function Card({
  handleSelect,
  link,
  price,
  title,
  qtd,
  selected
}: CardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <CardImage link={link} />
      </S.ImageContainer>
      <CardTitle name={title} />
      <CardPrice number={price} />
      <CardButton
        onClick={handleSelect}
        number={qtd}
        name="ADICIONAR AO CARRINHO"
        selected={selected}
      />
    </S.Container>
  )
}

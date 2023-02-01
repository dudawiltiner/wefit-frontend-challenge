import * as S from './styles'
import { CardTitleProps } from './types'

export default function CardTitle({ name }: CardTitleProps) {
  return <S.TitleStyled id="title">{name}</S.TitleStyled>
}

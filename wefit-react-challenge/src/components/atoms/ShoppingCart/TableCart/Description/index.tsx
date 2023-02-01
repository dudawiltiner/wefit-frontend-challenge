import * as S from './styles'
import { DescriptionProps } from './types'

export default function Description({ name }: DescriptionProps) {
  return <S.DescriptionStyled>{name}</S.DescriptionStyled>
}

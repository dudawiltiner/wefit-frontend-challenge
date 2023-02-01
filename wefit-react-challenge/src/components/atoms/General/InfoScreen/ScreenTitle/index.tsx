import * as S from './styles'
import { ScreenTitleProps } from './types'

export default function ScreenTitle({ name }: ScreenTitleProps) {
  return <S.ScreenTitleStyled>{name}</S.ScreenTitleStyled>
}

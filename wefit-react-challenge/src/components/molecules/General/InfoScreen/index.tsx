import {
  ScreenButton,
  ScreenImage,
  ScreenTitle
} from '../../../atoms/General/InfoScreen'
import * as S from './styles'
import { InfoScreenProps } from './types'

export default function InfoScreen({
  title,
  image,
  link,
  isPurchaseMade
}: InfoScreenProps) {
  return (
    <S.Container isPurchaseMade={isPurchaseMade}>
      <ScreenTitle name={title} />
      <ScreenImage link={image} />
      <ScreenButton link={link} name="VOLTAR" />
    </S.Container>
  )
}

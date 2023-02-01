import InfoScreen from '../../../molecules/General/InfoScreen'
import * as S from './styles'

export default function CartInfoScreen() {
  return (
    <S.Container>
      <InfoScreen
        isPurchaseMade={false}
        title="Parece que não há nada por aqui :("
        image="src/assets/nocart.png"
        link="/"
      />
    </S.Container>
  )
}

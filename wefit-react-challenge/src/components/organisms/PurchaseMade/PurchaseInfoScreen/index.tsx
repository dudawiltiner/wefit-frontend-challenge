import InfoScreen from '@components/molecules/General/InfoScreen';
import * as S from './styles';

export default function PurchaseInfoScreen() {
  return (
    <S.Container>
      <InfoScreen
        isPurchaseMade
        title="Compra realizada com sucesso!"
        image="src/assets/purchase.png"
        link="/shoppingcart"
      />
    </S.Container>
  );
}

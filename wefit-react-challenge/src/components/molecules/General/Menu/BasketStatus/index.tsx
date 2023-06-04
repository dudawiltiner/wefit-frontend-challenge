import {
  BasketImage,
  DescriptionBasket,
  QtdItens,
} from '@components/atoms/General/Menu';
import * as S from './styles';
import { BasketStatusProps } from './types';

export default function BasketStatus({ qtd }: BasketStatusProps) {
  return (
    <S.GoCartLink to={'/shoppingcart'}>
      <S.Wrapper>
        <DescriptionBasket name="Meu Carrinho" />
        <QtdItens number={qtd} />
      </S.Wrapper>
      <BasketImage />
    </S.GoCartLink>
  );
}

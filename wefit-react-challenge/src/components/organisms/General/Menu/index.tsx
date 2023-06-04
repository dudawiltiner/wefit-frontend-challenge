import { Title } from '@components/atoms/General/Menu';
import BasketStatus from '@components/molecules/General/Menu/BasketStatus';
import { productsSelectedAt } from '@store/index';
import { useAtom } from 'jotai';
import * as S from './styles';

export default function Menu() {
  const [productsSelected] = useAtom(productsSelectedAt);

  return (
    <S.Container>
      <S.Wrapper>
        <Title name="WeMovies" />
        <BasketStatus qtd={productsSelected.length} />
      </S.Wrapper>
    </S.Container>
  );
}

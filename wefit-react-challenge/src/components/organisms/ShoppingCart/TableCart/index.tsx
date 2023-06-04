import { useAtom } from 'jotai';
import { useGetProducts } from '../../../../hooks/Home/use-get-products';
import { productsSelectedAt } from '../../../../store';
import Footer from '../../../molecules/ShoppingCart/TableCart/Footer';
import Header from '../../../molecules/ShoppingCart/TableCart/Header';
import Item from '../../../molecules/ShoppingCart/TableCart/Item';
import ItemMobile from '../../../molecules/ShoppingCart/TableCart/ItemMobile';
import * as S from './styles';

export default function TableCart() {
  const { data } = useGetProducts();
  const [productsSelected, setProductsSelected] = useAtom(productsSelectedAt);

  function calculateTotal() {
    let total = 0;

    data?.forEach((product) => {
      const qtd = productsSelected.filter((el) => el === product.id).length;

      if (qtd) {
        total += qtd * product.price;
      }
    });

    return total;
  }

  const total = calculateTotal();

  function removeItem(id: number) {
    const list = productsSelected;

    list.splice(list.indexOf(id), 1);

    setProductsSelected([...list]);
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.MobileContainer>
          {data?.map((product) => (
            <>
              {productsSelected.filter((el) => el === product.id).length !==
                0 && (
                <ItemMobile
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  qtd={
                    productsSelected.filter((el) => el === product.id).length
                  }
                  handleSub={() => removeItem(product.id)}
                  handleAdd={() =>
                    setProductsSelected([...productsSelected, product.id])
                  }
                  handleRemoveAll={() =>
                    setProductsSelected([
                      ...productsSelected.filter((el) => el !== product.id),
                    ])
                  }
                />
              )}
            </>
          ))}
        </S.MobileContainer>

        <S.DeskTable>
          <Header />
          <tbody>
            {data?.map((product) => (
              <>
                {productsSelected.filter((el) => el === product.id).length !==
                  0 && (
                  <Item
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    qtd={
                      productsSelected.filter((el) => el === product.id).length
                    }
                    handleSub={() => removeItem(product.id)}
                    handleAdd={() =>
                      setProductsSelected([...productsSelected, product.id])
                    }
                    handleRemoveAll={() =>
                      setProductsSelected([
                        ...productsSelected.filter((el) => el !== product.id),
                      ])
                    }
                  />
                )}
              </>
            ))}
          </tbody>
        </S.DeskTable>

        <Footer total={total} />
      </S.Wrapper>
    </S.Container>
  );
}

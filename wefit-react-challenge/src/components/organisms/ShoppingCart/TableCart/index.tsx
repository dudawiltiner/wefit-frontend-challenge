import {
  Footer,
  Header,
  Item,
  ItemMobile,
} from '@components/molecules/ShoppingCart';
import { useTableCart } from '@hooks/Home/use-table-cart';
import * as S from './styles';

export default function TableCart() {
  const {
    data,
    removeItem,
    addItem,
    removeAllItens,
    calculateTotalValue,
    getFilteredSelectedProductsQtd,
  } = useTableCart();

  return (
    <S.Container>
      <S.Wrapper>
        <S.MobileContainer>
          {data?.map((product) => (
            <>
              {getFilteredSelectedProductsQtd(product.id) !== 0 && (
                <ItemMobile
                  key={product.id}
                  product={product}
                  selectedProductsQtd={getFilteredSelectedProductsQtd(
                    product.id
                  )}
                  handleSub={() => removeItem(product.id)}
                  handleAdd={() => addItem(product.id)}
                  handleRemoveAll={() => removeAllItens(product.id)}
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
                {getFilteredSelectedProductsQtd(product.id) !== 0 && (
                  <Item
                    key={product.id}
                    product={product}
                    selectedProductsQtd={getFilteredSelectedProductsQtd(
                      product.id
                    )}
                    handleSub={() => removeItem(product.id)}
                    handleAdd={() => addItem(product.id)}
                    handleRemoveAll={() => removeAllItens(product.id)}
                  />
                )}
              </>
            ))}
          </tbody>
        </S.DeskTable>
        <Footer total={calculateTotalValue()} />
      </S.Wrapper>
    </S.Container>
  );
}

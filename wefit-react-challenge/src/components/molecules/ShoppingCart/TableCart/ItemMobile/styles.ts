import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;
export const TitleAndPriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p#title {
    font-size: 14px !important;
  }

  p#price {
    font-size: 16px !important;
  }
`;

export const ImageContainer = styled.div`
  width: 89px;
`;

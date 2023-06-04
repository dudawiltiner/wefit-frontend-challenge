import styled from 'styled-components';

export const PriceStyled = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  display: flex;
  justify-content: start;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

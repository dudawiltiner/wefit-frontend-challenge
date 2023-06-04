import styled from 'styled-components';

export const TitleStyled = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-top: 7px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 147px;
  height: 188px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

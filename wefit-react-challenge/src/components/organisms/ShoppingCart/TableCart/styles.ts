import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (max-width: 545px) {
    margin-top: 0px;
  }
`;

export const MobileContainer = styled.div`
  max-height: 100%;
  display: none;

  @media (max-width: 545px) {
    min-height: 60vh;
    display: block;
  }
`;

export const DeskTable = styled.table`
  width: 100%;

  @media (max-width: 545px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 950px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  margin: 0px 16px;
  border-radius: 4px;

  @media (max-width: 545px) {
    padding: 16px;
  }
`;

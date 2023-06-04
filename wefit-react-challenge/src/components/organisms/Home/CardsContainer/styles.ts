import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 16px 16px 16px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 960px;
  margin-top: 24px;
  gap: 16px;

  @media (max-width: 792px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    margin-top: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
`;

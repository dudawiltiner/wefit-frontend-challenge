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

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 52px;
  padding: 16px;
  border-radius: 8px 0px 0px 8px;
  background-color: #ffff;
  border: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2f2e41;

  ::placeholder {
    color: #c0c0c0;
  }
`;

export const SearchedText = styled.div`
  display: flex;
  color: #ffff;
  width: 100%;
  margin-top: 24px;
  max-width: 960px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  justify-content: space-between;

  @media (max-width: 524px) {
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }
`;

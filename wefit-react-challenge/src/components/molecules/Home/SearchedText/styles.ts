import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #ffff;
  width: 100%;
  margin-top: 24px;
  max-width: 960px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  justify-content: space-between;

  .result-text {
    font-weight: 700;
  }

  @media (max-width: 524px) {
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }
`;

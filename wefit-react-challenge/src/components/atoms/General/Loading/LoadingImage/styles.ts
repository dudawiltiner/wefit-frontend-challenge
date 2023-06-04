import styled from 'styled-components';

export const LoadingStyled = styled.img`
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

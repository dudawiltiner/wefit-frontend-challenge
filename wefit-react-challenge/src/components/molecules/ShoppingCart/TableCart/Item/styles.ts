import styled from 'styled-components';

export const Price = styled.td`
  width: 25%;

  @media (max-width: 640px) {
    width: 18%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: end;
  background: transparent;
  border: none;
  cursor: pointer;
`;

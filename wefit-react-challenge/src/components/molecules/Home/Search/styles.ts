import styled from 'styled-components';

interface ContainerProps {
  focus: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  max-width: 960px;
  border-radius: 8px;
  background-color: #ffff;
  border: ${({ theme, focus }) =>
    focus
      ? `2px solid ${theme.colors.lightBlue}`
      : `2px solid ${theme.colors.white}`};
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

export const SearchButton = styled.button`
  width: 56px;
  height: 52px;
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0px;
`;

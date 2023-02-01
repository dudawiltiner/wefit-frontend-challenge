import styled from 'styled-components'

interface ButtonProps {
  selected: boolean
}

export const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  gap: 12px;
  width: 287px;
  height: 40px;
  border: none;
  margin-top: 8px;
  cursor: pointer;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.green : theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  @media (max-width: 390px) {
    width: 100%;
  }
`

import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  border: none;
  cursor: pointer;

  background-color: var(--background-color);

  &:disabled {
    cursor: not-allowed;
  }
`;

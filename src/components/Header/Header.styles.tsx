import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  grid-column: 1 / 4;
  grid-row: 1;
  background-color: var(--foreground-color);
  img {
    margin-left: 5%;
    max-width: 100px;
    width: 15vw;
  }
`;

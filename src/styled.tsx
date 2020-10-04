import styled from 'styled-components';

export const AppBody = styled.div`
  display: grid;
  grid-template-rows: 8vh auto;
  background-color: var(--background-color);
  width: 100vw;
  height: 100vh;

  //Is Desktop
  @media only screen and (min-width: 600px) {
    grid-template-rows: 8vh auto 8vh;
    grid-template-columns: repeat(3, 33.33%);
  }
`;

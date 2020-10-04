import styled from 'styled-components';

export const AppBody = styled.div`
  display: grid;
  grid-template-rows: 8vh auto;
  grid-template-columns: 100%;
  background-color: var(--background-color);
  width: 100vw;
  height: 100vh;

  //Is Desktop
  @media only screen and (min-width: 600px) {
    grid-template-rows: 8vh auto 8vh;
    grid-template-columns: 1fr minmax(370px, 600px) 1fr;
  }
`;

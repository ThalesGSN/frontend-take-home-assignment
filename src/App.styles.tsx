import styled from 'styled-components';
import { IsDesktopMediaQuery } from './utils/constants';

export const AppBody = styled.div`
  display: grid;
  grid-template-rows: 8vh auto;
  grid-template-columns: 100%;
  background-color: var(--background-color);
  width: 100vw;
  height: 100vh;

  ${IsDesktopMediaQuery} {
    grid-template-rows: 8vh 700px 1fr;
    grid-template-columns: 1fr minmax(370px, 560px) 1fr;
  }
`;

import styled from 'styled-components';
import { IsDesktopMediaQuery } from '../../utils/constants';

export const Container = styled.main`
  grid-row: 2;
  place-self: stretch;

  display: grid;
  grid-template-rows: 10% auto;
  grid-template-columns: 100%;
  justify-content: center;
  font-size: 18px;

  ${IsDesktopMediaQuery} {
    grid-column: 2;
    font-size: 1.5vw;
  }

  p.title {
    color: var(--primary-color);
    text-align: center;
    font-weight: 400;
    strong {
      font-weight: 600;
    }
  }
`;

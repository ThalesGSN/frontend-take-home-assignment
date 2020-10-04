import styled from 'styled-components';

export const Container = styled.main`
  grid-row: 2;
  display: flex;
  justify-content: center;
  color: var(--primary-color);
  font-size: 5vw;

  @media only screen and (min-width: 600px) {
    grid-column: 2;
    font-size: inherit;
  }

  p {
    display: inline;
    font-weight: 400;
    strong {
      font-weight: 600;
    }
  }
`;

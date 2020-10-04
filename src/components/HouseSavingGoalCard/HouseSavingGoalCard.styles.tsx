import styled from 'styled-components';
import { IsDesktopMediaQuery } from '../../utils/constants';

export const Card = styled.section`
  background-color: var(--foreground-color);
  border-radius: 16px 16px 0 0;
  box-shadow: 0 2px 16px rgba(225, 232, 237, 0.8);
  place-self: stretch;
  padding: 33px 16px;

  display: grid;
  grid-template-rows: 7% 5% 5% 20% 20% 30% 13%;

  img {
    width: 32px;
  }

  h3 {
    font-weight: 600;
    margin: 5px 0;
  }
  .label {
    color: var(--contrast-color);
    font-size: 14px;
    margin-top: 5px;
  }

  ${IsDesktopMediaQuery} {
    border-radius: 8px;
    img {
      width: 40px;
    }
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 55px;
  border: none;
  border-radius: 32px;
  font-weight: 600;
  color: var(--foreground-color);
  background-color: var(--primary-color);
`;
ConfirmButton.displayName = 'ConfirmButton';

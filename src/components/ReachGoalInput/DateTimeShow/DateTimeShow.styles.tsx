import styled from 'styled-components';

export const DateTimeContainer = styled.section`
  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform, opacity;

    time {
      display: flex;
      flex-direction: column;
      align-content: center;
      text-align: center;
      flex-basis: 80%;
      color: var(--main-color);
      cursor: default;
      z-index: -1;

      span:first-child {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
`;

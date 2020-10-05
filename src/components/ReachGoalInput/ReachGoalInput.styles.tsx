import styled from 'styled-components';

export const InputContainer = styled.div`
  span {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  article time {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    flex-basis: 80%;
    color: var(--main-color);
    span:first-child {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .iconButton {
    background-color: var(--background-color);
    display: flex;
    align-content: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: none;

    img {
      width: 10px;
    }

    .invert {
      transform: scaleX(-1);
    }

    span {
      color: #657786;
      position: relative;
      top: 50%;
      margin-top: -10px;
      font-weight: 400;
      font-size: 22px;
    }
  }
  .inputWrapper {
    display: flex;
    border: 1px solid #e1e8ed;
    border-radius: 4px;
    justify-content: space-between;
  }
  .simple-trans-main > div {
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`;

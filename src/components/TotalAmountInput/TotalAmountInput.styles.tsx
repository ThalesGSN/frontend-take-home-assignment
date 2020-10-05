import styled from 'styled-components';
import { IsDesktopMediaQuery } from '../../utils/constants';

export const InputContainer = styled.label`
  span {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .masked-input {
    -webkit-appearance: none;
    outline: none;
    background: none;
    border: none;
    margin-left: 10px;
    color: var(--main-color);
    font-weight: 600;
    font-size: 18px;
    width: 80%;
  }

  .iconArea {
    background-color: var(--background-color);
    display: flex;
    align-content: center;
    justify-content: center;
    width: 56px;
    height: 56px;
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
  }
`;
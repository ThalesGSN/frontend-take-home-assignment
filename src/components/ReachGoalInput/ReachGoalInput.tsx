import React, { FunctionComponent, useState } from 'react';
import { InputContainer } from './ReachGoalInput.styles';
import Arrow from '../../assets/icons/arrow.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { useTransition, animated } from 'react-spring';
import { Months } from '../../utils/constants';

const TotalAmountInput: FunctionComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear() + 1);
  const [month, setMonth] = useState(new Date().getMonth());

  const handleSelectNextMonth = () => {
    if (month < 11) {
      setMonth(month => month + 1);
      return;
    }
    setYear(year => year + 1);
    setMonth(0);
  };

  const handleSelectPreviousMonth = () => {
    if (month > 0) {
      setMonth(month => month - 1);
      return;
    }
    setYear(year => year - 1);
    setMonth(11);
  };

  return (
    <InputContainer>
      <span>Reach goal by</span>
      <span className="inputWrapper">
        <button
          className="iconButton previous"
          aria-label="Select previous month"
          onClick={handleSelectPreviousMonth}
        >
          <img src={Arrow} alt="arrow" aria-hidden="true" />
        </button>

        <article aria-label="Selected month">
          <time dateTime={`${year}-${month}-01 00:00`}>
            <span>{Months[month]}</span>
            <span>{year}</span>
          </time>
        </article>

        <button
          onClick={handleSelectNextMonth}
          className="iconButton next"
          aria-label="Select next month"
        >
          <img src={Arrow} className="invert" alt="arrow" aria-hidden="true" />
        </button>
      </span>
    </InputContainer>
  );
};

export default TotalAmountInput;

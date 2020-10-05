import React, { FunctionComponent, useEffect, useState } from 'react';
import { InputContainer } from './ReachGoalInput.styles';
import Arrow from '../../assets/icons/arrow.svg';
import { Months } from '../../utils/constants';
import { ZeroPad } from '../../utils/functions';
import { UseTransactionFrame } from '../../utils/types/useTransactionFrame';
import { ReachGoalInputDate } from '../../utils/types/ReachGoalInputDate';
// Disabling rule because of react-spring lack of support for TypeScrypt
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { useTransition, animated } from 'react-spring';

const ReachGoalInput: FunctionComponent = () => {
  const now = new Date();

  const [year, setYear] = useState(now.getFullYear() + 1);
  const [month, setMonth] = useState(now.getMonth());
  const [isNext, setIsNext] = useState(true);
  const [disableSelectPreviousMonth, setDisableSelectPreviousMonth] = useState(
    false
  );

  const currentValue: ReachGoalInputDate = {
    year,
    month
  };
  const getAnimationKey = (item: ReachGoalInputDate) =>
    `${item.year}${item.month}`;

  useEffect(() => {
    const currentMonthIsSelected =
      now.getFullYear() === year && now.getMonth() === month;
    if (currentMonthIsSelected) {
      setDisableSelectPreviousMonth(true);
      return;
    }
    setDisableSelectPreviousMonth(false);
  }, [year, month, now]);

  const handleSelectNextMonth = () => {
    setIsNext(true);

    const monthIsDecember = month === 11;
    if (monthIsDecember) {
      setYear(year => year + 1);
      setMonth(0);
      return;
    }

    setMonth(month => month + 1);
  };

  const handleSelectPreviousMonth = () => {
    setIsNext(false);

    const monthIsJanuary = month === 0;
    if (monthIsJanuary) {
      setYear(year => year - 1);
      setMonth(11);
      return;
    }

    setMonth(month => month - 1);
  };

  const next = useTransition(currentValue, getAnimationKey, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(-50%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

  const previous = useTransition(currentValue, getAnimationKey, {
    from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(-50%,0,0)' }
  });

  const transitions = isNext ? next : previous;

  return (
    <InputContainer>
      <span>Reach goal by</span>
      <span className="inputWrapper">
        <button
          className="previous iconButton"
          aria-label="Select previous month"
          onClick={handleSelectPreviousMonth}
          disabled={disableSelectPreviousMonth}
          aria-hidden={disableSelectPreviousMonth ? 'false' : 'true'}
        >
          <img src={Arrow} alt="arrow" aria-hidden="true" />
        </button>

        <article aria-label="Selected month">
          {transitions.map(({ item, key, props }: UseTransactionFrame) => {
            const dateTime = `${item.year}-${ZeroPad(
              item.month + 1,
              2
            )}-01 00:00`;

            return (
              <animated.div key={key} style={props}>
                <time dateTime={dateTime}>
                  <span>{Months[item.month]}</span>
                  <span>{item.year}</span>
                </time>
              </animated.div>
            );
          })}
        </article>

        <button
          onClick={handleSelectNextMonth}
          className="next iconButton"
          aria-label="Select next month"
        >
          <img src={Arrow} className="invert" alt="arrow" aria-hidden="true" />
        </button>
      </span>
    </InputContainer>
  );
};

export default ReachGoalInput;

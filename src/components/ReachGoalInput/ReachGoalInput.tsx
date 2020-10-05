import React, { FunctionComponent, useEffect, useState } from 'react';
import { InputContainer } from './ReachGoalInput.styles';
import { UseTransactionFrame } from '../../utils/types/useTransactionFrame';
import { ReachGoalInputDate } from '../../utils/types/ReachGoalInputDate';
import ReachGoalButton from './ReachGoalButton/ReachGoalButton';
import DateTimeShow from './DateTimeShow/DateTimeShow';
// Disabling rule because of react-spring lack of support for TypeScrypt
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { useTransition } from 'react-spring';
import {
  GenerateAnimationKey,
  OnNextTransitionAnimation,
  OnPreviousTransitionAnimation
} from './ReachGoalInput.Animations';

const ReachGoalInput: FunctionComponent = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear() + 1);
  const [month, setMonth] = useState(now.getMonth());
  const [shouldShowNextAnimation, setShouldShowNextAnimation] = useState(true);
  const [disableSelectPreviousMonth, setDisableSelectPreviousMonth] = useState(
    false
  );

  const currentValue: ReachGoalInputDate = {
    year,
    month
  };

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
    setShouldShowNextAnimation(true);

    const monthIsDecember = month === 11;
    if (monthIsDecember) {
      setYear(year => year + 1);
      setMonth(0);
      return;
    }

    setMonth(month => month + 1);
  };

  const handleSelectPreviousMonth = () => {
    setShouldShowNextAnimation(false);

    const monthIsJanuary = month === 0;
    if (monthIsJanuary) {
      setYear(year => year - 1);
      setMonth(11);
      return;
    }

    setMonth(month => month - 1);
  };

  const nextAnimation = useTransition(
    currentValue,
    GenerateAnimationKey,
    OnNextTransitionAnimation
  );

  const previousAnimation = useTransition(
    currentValue,
    GenerateAnimationKey,
    OnPreviousTransitionAnimation
  );

  const animationFrames = shouldShowNextAnimation
    ? nextAnimation
    : previousAnimation;

  return (
    <InputContainer>
      <span>Reach goal by</span>
      <span className="inputWrapper">
        <ReachGoalButton
          className="previous"
          onClick={handleSelectPreviousMonth}
          disabled={disableSelectPreviousMonth}
          aria-label="Select previous month"
        />

        <article aria-label="Selected month">
          {animationFrames.map(({ item, key, props }: UseTransactionFrame) => (
            <DateTimeShow
              key={key}
              generatedKey={key}
              date={item}
              styles={props}
            />
          ))}
        </article>

        <ReachGoalButton
          className="next"
          onClick={handleSelectNextMonth}
          aria-label="Select next month"
          invertArrow={true}
        />
      </span>
    </InputContainer>
  );
};

export default ReachGoalInput;

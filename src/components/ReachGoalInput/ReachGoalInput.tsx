import React, { useEffect, useState } from 'react';
import { InputContainer } from './ReachGoalInput.styles';
import { UseTransactionFrame } from '../../utils/types/useTransactionFrame';
import ReachGoalButton from './ReachGoalButton/ReachGoalButton';
import DateTimeShow from './DateTimeShow/DateTimeShow';
import { useTransition } from 'react-spring';
import {
  GenerateAnimationKey,
  OnNextTransitionAnimation,
  OnPreviousTransitionAnimation
} from './ReachGoalInput.animations';
import { addMonths } from 'date-fns';

export interface ReachGoalInputProps {
  initialDate: Date;
  onChange: (date: Date) => void;
}

const ReachGoalInput = (props: ReachGoalInputProps) => {
  const { initialDate, onChange } = props;

  const [time, setTime] = useState(initialDate);

  const [shouldShowNextAnimation, setShouldShowNextAnimation] = useState(true);
  const [disableSelectPreviousMonth, setDisableSelectPreviousMonth] = useState(
    false
  );

  useEffect(() => {
    const now = new Date();
    const currentMonthIsSelected =
      now.getFullYear() === time.getFullYear() &&
      now.getMonth() === time.getMonth();
    if (currentMonthIsSelected) {
      setDisableSelectPreviousMonth(true);
      return;
    }

    setDisableSelectPreviousMonth(false);
  }, [time]);

  const handleSelectNextMonth = () => {
    setShouldShowNextAnimation(true);
    setTime((time: Date) => {
      const result = addMonths(time, 1);
      onChange(result);
      return result;
    });
  };

  const handleSelectPreviousMonth = () => {
    setShouldShowNextAnimation(true);
    setTime((time: Date) => {
      const result = addMonths(time, -1);
      onChange(result);
      return result;
    });
  };

  const nextAnimation = useTransition(
    time,
    GenerateAnimationKey,
    OnNextTransitionAnimation
  );

  const previousAnimation = useTransition(
    time,
    GenerateAnimationKey,
    OnPreviousTransitionAnimation
  );

  const animationFrames = shouldShowNextAnimation
    ? nextAnimation
    : previousAnimation;

  return (
    <InputContainer aria-required="true">
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

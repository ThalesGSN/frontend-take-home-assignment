import React, { useEffect, useRef, useState } from 'react';
import { InputContainer } from './ReachGoalByInput.styles';
import ReachGoalButton from './ReachGoalButton/ReachGoalButton';
import DateTimeShow from './DateTimeShow/DateTimeShow';
import { ReachGoalByRefAnimation } from './ReachGoalByInput.animations';
import { addMonths } from 'date-fns';

export interface ReachGoalInputProps {
  initialDate: Date;
  onChange: (date: Date) => void;
}

const ReachGoalByInput = (props: ReachGoalInputProps) => {
  const { initialDate, onChange } = props;

  const [date, setDate] = useState(initialDate);
  const [disabledSelectPreviousMonth, disableSelectPreviousMonth] = useState(
    false
  );
  const dataTimeShowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const now = new Date();
    const isCurrentMonthSelected =
      now.getFullYear() === date.getFullYear() &&
      now.getMonth() === date.getMonth();
    ReachGoalByRefAnimation(dataTimeShowRef);
    disableSelectPreviousMonth(isCurrentMonthSelected);
  }, [date]);

  const handleSelectNextMonth = () => {
    setDate((time: Date) => {
      const result = addMonths(time, 1);
      onChange(result);
      return result;
    });
  };

  const handleSelectPreviousMonth = () => {
    setDate((time: Date) => {
      const result = addMonths(time, -1);
      onChange(result);
      return result;
    });
  };

  return (
    <InputContainer aria-required="true">
      <span>Reach goal by</span>
      <span className="inputWrapper">
        <ReachGoalButton
          className="previous"
          onClick={handleSelectPreviousMonth}
          disabled={disabledSelectPreviousMonth}
          aria-label="Select previous month"
        />

        <article aria-label="Selected month" ref={dataTimeShowRef}>
          <DateTimeShow date={date} />
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

export default ReachGoalByInput;

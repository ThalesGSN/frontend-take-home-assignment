import React, { CSSProperties } from 'react';
import { ZeroPad } from '../../../utils/functions';
import { Months } from '../../../utils/constants';
import { ReachGoalInputDate } from '../../../utils/types/ReachGoalInputDate';
import { DateTimeContainer } from './DateTimeShow.styles';
// Disabling rule because of react-spring lack of support for TypeScrypt
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { animated, ForwardedProps } from 'react-spring';

export interface DateTimeShowProps {
  generatedKey: string;
  date: ReachGoalInputDate;
  styles: ForwardedProps<CSSProperties>;
}

const DateTimeShow = (props: DateTimeShowProps) => {
  const { generatedKey, date, styles } = props;
  const { year, month } = date;

  const dateTime = `${year}-${ZeroPad(month + 1, 2)}-01 00:00`;

  return (
    <DateTimeContainer>
      <animated.div key={generatedKey} style={styles}>
        <time dateTime={dateTime}>
          <span>{Months[month]}</span>
          <span>{year}</span>
        </time>
      </animated.div>
    </DateTimeContainer>
  );
};

export default DateTimeShow;

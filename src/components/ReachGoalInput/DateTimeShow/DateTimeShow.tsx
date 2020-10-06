import React, { CSSProperties } from 'react';
import { ZeroPad } from '../../../utils/functions';
import { Months } from '../../../utils/constants';
import { DateTimeContainer } from './DateTimeShow.styles';
import { animated, ForwardedProps } from 'react-spring';

export interface DateTimeShowProps {
  generatedKey: string;
  date: Date;
  styles: ForwardedProps<CSSProperties>;
}

const DateTimeShow = (props: DateTimeShowProps) => {
  const { generatedKey, date, styles } = props;
  const year = date.getFullYear();
  const month = date.getMonth();

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

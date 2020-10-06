import React, { useEffect, useRef } from 'react';
import { ResultsContainer } from './SavingGoalResults.styles';
import { Months } from '../../utils/constants';
import { CurrencyFormat } from '../../utils/functions';
import {
  CurrencyAnimation,
  CurrencyAnimationOptions
} from './SavingGoalResults.animations';

export interface SavingGoalResultsProps {
  result: number;
  numberOfMonthsToSave: number;
  totalAmount: number;
  finalDate: Date;
}

const SavingGoalResults = (props: SavingGoalResultsProps) => {
  const { numberOfMonthsToSave, totalAmount, result, finalDate } = props;
  const resultRef = useRef<HTMLMarqueeElement>(null);
  const year = finalDate.getFullYear();
  const month = finalDate.getMonth();

  useEffect(() => {
    const result = resultRef.current;
    if (!result) {
      return;
    }

    result.animate(CurrencyAnimation, CurrencyAnimationOptions);
  }, [result]);

  return (
    <ResultsContainer aria-label="Results">
      <div>
        <span aria-hidden="true">
          Monthly <span className="amount">amount</span>
        </span>
        <mark
          className="animate"
          aria-label="Monthly value to be saved"
          ref={resultRef}
        >
          <strong>{CurrencyFormat(result)}</strong>
        </mark>
      </div>
      <details open>
        <summary />
        <p>
          You’re planning{' '}
          <strong>{numberOfMonthsToSave} monthly deposits</strong> to reach your{' '}
          <strong>{CurrencyFormat(totalAmount)}</strong> goal by{' '}
          <strong>
            {Months[month]} {year}
          </strong>
          .
        </p>
      </details>
    </ResultsContainer>
  );
};

export default SavingGoalResults;

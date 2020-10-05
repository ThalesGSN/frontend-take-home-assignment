import React from 'react';
import { ReachGoalInputDate } from '../../utils/types/ReachGoalInputDate';

export interface SavingGoalResultsProps {
  result: number;
  numberOfMonthsToSave: number;
  totalAmount: number;
  finalDate: ReachGoalInputDate;
}

const SavingGoalResults: (props: SavingGoalResultsProps) => JSX.Element = (
  props: SavingGoalResultsProps
) => <React.Fragment />;

export default SavingGoalResults;

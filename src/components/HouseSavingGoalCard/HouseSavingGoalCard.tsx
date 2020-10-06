import React, { FunctionComponent, useState } from 'react';
import { Card, CardHeader, ConfirmButton } from './HouseSavingGoalCard.styles';
import house from '../../assets/icons/house.svg';
import TotalAmountInput from '../TotalAmountInput/TotalAmountInput';
import ReachGoalByInput from '../ReachGoalByInput/ReachGoalByInput';
import SavingGoalResults from '../SavingGoalResults/SavingGoalResults';
import { addYears, differenceInMonths } from 'date-fns';

const HouseSavingGoalCard: FunctionComponent = () => {
  const [totalAmount, setTotalAmount] = useState(25000);
  const [reachGoal, setReachGoal] = useState(addYears(new Date(), 4));

  const handleAmountChange = (totalAmount: number) => {
    setTotalAmount(totalAmount);
  };

  const handleReachGoalChange = (newReachGoal: Date) => {
    setReachGoal(newReachGoal);
  };

  const numberOfMonthsToSave = differenceInMonths(reachGoal, new Date()) + 1;
  const result = totalAmount / numberOfMonthsToSave;

  return (
    <Card>
      <CardHeader>
        <img src={house} alt="A house icon" aria-hidden="true" />
        <h3>Buy a house</h3>
        <span className="label">Saving goal</span>
      </CardHeader>
      <TotalAmountInput
        initialValue={totalAmount}
        onChange={handleAmountChange}
      />
      <ReachGoalByInput
        initialDate={reachGoal}
        onChange={handleReachGoalChange}
      />
      <SavingGoalResults
        finalDate={reachGoal}
        numberOfMonthsToSave={numberOfMonthsToSave}
        result={result}
        totalAmount={totalAmount}
      />
      <ConfirmButton>Confirm</ConfirmButton>
    </Card>
  );
};

export default HouseSavingGoalCard;

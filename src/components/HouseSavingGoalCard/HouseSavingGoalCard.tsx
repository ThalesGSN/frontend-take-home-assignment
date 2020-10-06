import React, { FunctionComponent, useState } from 'react';
import { Card, ConfirmButton } from './HouseSavingGoalCard.styles';
import house from '../../assets/icons/house.svg';
import TotalAmountInput from '../TotalAmountInput/TotalAmountInput';
import ReachGoalInput from '../ReachGoalInput/ReachGoalInput';
import SavingGoalResults from '../SavingGoalResults/SavingGoalResults';
import { ReachGoalInputDate } from '../../utils/types/ReachGoalInputDate';

const finalDate: ReachGoalInputDate = {
  month: 9,
  year: 2020
};

const HouseSavingGoalCard: FunctionComponent = () => {
  const [result, setResult] = useState(521.0);
  return (
    <Card>
      <img src={house} alt="A house icon" aria-hidden="true" />
      <h3>Buy a house</h3>
      <span className="label">Saving goal</span>
      <TotalAmountInput />
      <ReachGoalInput />
      <SavingGoalResults
        finalDate={finalDate}
        numberOfMonthsToSave={48}
        result={result}
        totalAmount={25000}
      />
      <ConfirmButton onClick={() => setResult(result => result + 1)}>
        Confirm
      </ConfirmButton>
    </Card>
  );
};

export default HouseSavingGoalCard;

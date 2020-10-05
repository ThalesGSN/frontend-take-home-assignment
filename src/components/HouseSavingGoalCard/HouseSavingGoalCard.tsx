import React, { FunctionComponent } from 'react';
import { Card, ConfirmButton } from './HouseSavingGoalCard.styles';
import house from '../../assets/icons/house.svg';
import TotalAmountInput from '../TotalAmountInput/TotalAmountInput';
import ReachGoalInput from '../ReachGoalInput/ReachGoalInput';

const HouseSavingGoalCard: FunctionComponent = () => (
  <Card>
    <img src={house} alt="A house icon" aria-hidden="true" />
    <h3>Buy a house</h3>
    <span className="label">Saving goal</span>
    <TotalAmountInput />
    <ReachGoalInput />
    <SavingGoalResults />
    <ConfirmButton>Confirm</ConfirmButton>
  </Card>
);

const SavingGoalResults: FunctionComponent = () => <React.Fragment />;

export default HouseSavingGoalCard;

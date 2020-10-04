import React, { FunctionComponent } from 'react';
import { Container } from './SavingGoalContainer.styles';

const SavingGoalContainer: FunctionComponent = () => (
  <Container>
    <p>
      Let&apos;s plan your <strong>saving goal.</strong>
    </p>
    <HouseSavingGoalCard />
  </Container>
);

const HouseSavingGoalCard: FunctionComponent = () => <React.Fragment />;

export default SavingGoalContainer;

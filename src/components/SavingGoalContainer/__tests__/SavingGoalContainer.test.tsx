import * as React from 'react';
import { shallow } from 'enzyme';
import SavingGoalContainer from '../SavingGoalContainer';

describe('SavingGoalContainer', () => {
  it('should render the saving goal container with the page title and a card', () => {
    const savingGoalContainer = shallow(<SavingGoalContainer />);

    expect(savingGoalContainer.find('p').text()).toBe(
      "Let's plan your saving goal."
    );

    expect(savingGoalContainer.find('HouseSavingGoalCard').exists()).toBe(true);
  });
});

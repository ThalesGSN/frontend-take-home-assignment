import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SavingGoalResults from '../SavingGoalResults';
import { ReachGoalInputDate } from '../../../utils/types/ReachGoalInputDate';

describe('SavingGoalResults', () => {
  let savingGoalResults: ShallowWrapper;

  beforeEach(() => {
    const finalDate: ReachGoalInputDate = {
      month: 9,
      year: 2020
    };
    savingGoalResults = shallow(
      <SavingGoalResults
        finalDate={finalDate}
        numberOfMonthsToSave={48}
        result={521.0}
        totalAmount={25000}
      />
    );
  });

  it('should render with A "Monthly" label', () => {
    const monthlyLabel = savingGoalResults.find('span');
    expect(monthlyLabel.text()).toBe('Monthly');
    expect(monthlyLabel.prop('aria-hidden')).toBe('true');
  });

  it('should render a monetary value to be saved', () => {
    expect(savingGoalResults.find('mark strong').text()).toBe('$521');
    expect(savingGoalResults.find('mark').prop('aria-label')).toBe(
      'Monthly value to be saved'
    );
  });

  it('should render with A "Monthly" label', () => {
    expect(savingGoalResults.find('details').text()).toBe(
      'You’re planning 48 monthly deposits to reach your $25,000 goal by October 2020.'
    );
  });
});

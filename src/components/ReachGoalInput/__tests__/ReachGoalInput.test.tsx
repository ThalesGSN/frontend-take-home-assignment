import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ReachGoalInput from '../ReachGoalInput';
import { Months } from '../../../utils/constants';

describe('Reach goal input', () => {
  let reachGoalInput: ReactWrapper;
  beforeEach(() => {
    reachGoalInput = mount(<ReachGoalInput />);
  });

  it('should have a "Reach goal by" Label', () => {
    expect(
      reachGoalInput
        .find('span')
        .first()
        .text()
    ).toBe('Reach goal by');
  });
  it('should have a previous month button', () => {
    expect(reachGoalInput.find('.previous').prop('aria-label')).toBe(
      'Select previous month'
    );
  });
  it('should have a next month button', () => {
    expect(reachGoalInput.find('.next').prop('aria-label')).toBe(
      'Select next month'
    );
  });
  it('should have a selected month label', () => {
    const thisMonth = Months[new Date().getMonth()];
    expect(
      reachGoalInput
        .find('time span')
        .first()
        .text()
    ).toBe(thisMonth);
  });
  it('should have a selected year label', () => {
    const nextYear = `${new Date().getFullYear() + 1}`;
    expect(
      reachGoalInput
        .find('time span')
        .at(1)
        .text()
    ).toBe(nextYear);
  });

  it('should select next month', () => {
    const thisMonth = new Date().getMonth();
    const expectedMonth = thisMonth !== 11 ? Months[thisMonth + 1] : 'January';

    reachGoalInput.find('button.next').simulate('click');
    // using .at(2) because of useTransition animation that duplicates the time node
    expect(
      reachGoalInput
        .find('time span')
        .at(2)
        .text()
    ).toBe(expectedMonth);
  });
  it('should select previous month', () => {
    const thisMonth = new Date().getMonth();
    const expectedMonth = thisMonth !== 0 ? Months[thisMonth - 1] : 'December';

    reachGoalInput.find('button.previous').simulate('click');
    // using .at(2) because of useTransition animation that duplicates the time node
    expect(
      reachGoalInput
        .find('time span')
        .at(2)
        .text()
    ).toBe(expectedMonth);
  });

  it('should select next year', () => {
    let month = new Date().getMonth();

    while (month < 12) {
      reachGoalInput.find('.next').simulate('click');
      month++;
    }

    const twoYearsFromCurrent = `${new Date().getFullYear() + 2}`;
    expect(
      reachGoalInput
        .find('time span')
        .last()
        .text()
    ).toBe(twoYearsFromCurrent);
  });
  it('should select previous year', () => {
    let month = new Date().getMonth();

    while (month > -1) {
      reachGoalInput.find('.previous').simulate('click');
      month--;
    }

    const thisYear = `${new Date().getFullYear()}`;
    expect(
      reachGoalInput
        .find('time span')
        .last()
        .text()
    ).toBe(thisYear);
  });
});

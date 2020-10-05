import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ReachGoalInput from '../ReachGoalInput';
import { Months } from '../../../utils/constants';

describe('Reach goal input', () => {
  let reachGoalInput: ShallowWrapper;
  beforeEach(() => {
    reachGoalInput = shallow(<ReachGoalInput />);
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
    reachGoalInput.find('.next').simulate('click');
    expect(
      reachGoalInput
        .find('time span')
        .first()
        .text()
    ).toBe(expectedMonth);
  });
  it('should select previous month', () => {
    const thisMonth = new Date().getMonth();
    const expectedMonth = thisMonth !== 0 ? Months[thisMonth - 1] : 'December';
    reachGoalInput.find('.previous').simulate('click');
    expect(
      reachGoalInput
        .find('time span')
        .first()
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
        .at(1)
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
        .at(1)
        .text()
    ).toBe(thisYear);
  });
});

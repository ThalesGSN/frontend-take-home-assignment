import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const component = shallow(<App />);

    expect(component.exists()).toEqual(true);
    expect(component.find('Header').exists()).toEqual(true);
    expect(component.find('SavingGoalContainer').exists()).toEqual(true);
  });
});

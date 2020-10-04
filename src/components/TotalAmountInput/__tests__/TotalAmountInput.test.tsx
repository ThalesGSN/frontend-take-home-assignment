import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TotalAmountInput from '../TotalAmountInput';

describe('TotalAmountInput', () => {
  let totalAmountInput: ShallowWrapper;
  beforeEach(() => {
    totalAmountInput = shallow(<TotalAmountInput />);
  });

  it('should have a "Total Amount" Label', () => {
    expect(totalAmountInput.find('label').text()).toBe(
      "Let's plan your saving goal."
    );
  });
  it('should have a dollar sign icon', () => {
    expect(totalAmountInput.find('img').prop('alt')).toBe('Dollar sign');
  });

  it('should have a input with inputmode numeric', () => {
    expect(totalAmountInput.find('input').prop('inputmode')).toBe('numeric');
  });

  it('should have a input that does not accept non numeric digits', () => {
    const input = totalAmountInput.find('input');
    input.simulate('change', { target: { value: 'a1234567890!!!' } });
    expect(input.prop('value')).toBe('1234567890');
  });

  it('should have a input that masks user input to a monetary value', () => {
    const input = totalAmountInput.find('input');
    input.simulate('change', { target: { value: '25000' } });
    expect(input.text()).toBe('25,000');
  });
});

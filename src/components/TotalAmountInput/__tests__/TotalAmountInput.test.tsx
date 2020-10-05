import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TotalAmountInput from '../TotalAmountInput';

describe('TotalAmountInput', () => {
  let totalAmountInput: ShallowWrapper;
  beforeEach(() => {
    totalAmountInput = shallow(<TotalAmountInput />);
  });

  it('should have a "Total Amount" Label', () => {
    expect(
      totalAmountInput
        .find('span')
        .first()
        .text()
    ).toBe('Total amount');
  });
  it('should have a dollar sign icon', () => {
    expect(totalAmountInput.find('.iconArea').prop('aria-label')).toBe(
      'Dollar sign'
    );
  });

  it('should have a input with inputMode numeric', () => {
    expect(totalAmountInput.find('.masked-input').prop('inputMode')).toBe(
      'numeric'
    );
  });
  //TODO: implement logic.

  // it('should have a input that does not accept non numeric digits', () => {
  //   const input = totalAmountInput.find('.masked-input');
  //   input.simulate('change', { target: { value: 'a1234567890!!!' } });
  //   expect(input.prop('value')).toBe('1234567890');
  // });
  //
  // it('should have a input that masks user input to a monetary value', () => {
  //   const input = totalAmountInput.find('.masked-input');
  //   input.simulate('change', { target: { value: '25000' } });
  //   expect(input.text()).toBe('25,000');
  // });
});

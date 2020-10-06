import React, { ChangeEvent } from 'react';
import { InputContainer } from './TotalAmountInput.styles';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { CurrencyMaskOptions } from './TotalAmountInput.masks';
import { GetNumberFromString } from '../../utils/functions';

export interface TotalAmountInputProps {
  initialValue: number;
  onChange: (value: number) => void;
}

const TotalAmountInput = (props: TotalAmountInputProps) => {
  const { initialValue, onChange } = props;
  const currencyMask = createNumberMask(CurrencyMaskOptions);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(GetNumberFromString(event.target.value));
  };

  return (
    <InputContainer>
      <span>Total amount</span>
      <span className="inputWrapper">
        <div className="iconArea" aria-label="Dollar sign">
          <span aria-hidden="true">$</span>
        </div>
        <MaskedInput
          className="masked-input"
          mask={currencyMask}
          inputMode="numeric"
          placeholder="Amount"
          defaultValue={initialValue}
          onChange={handleChange}
        />
      </span>
    </InputContainer>
  );
};

export default TotalAmountInput;

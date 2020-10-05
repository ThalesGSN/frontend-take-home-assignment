import React, { FunctionComponent } from 'react';
import { InputContainer } from './TotalAmountInput.styles';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: false,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false
};

const TotalAmountInput: FunctionComponent = () => {
  const currencyMask = createNumberMask(defaultMaskOptions);

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
        />
      </span>
    </InputContainer>
  );
};

export default TotalAmountInput;

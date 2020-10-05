import React, { FunctionComponent } from 'react';
import Arrow from '../../../assets/icons/arrow.svg';
import { ButtonContainer } from './ReachGoalButton.styles';

export interface ReachGoalButtonProps {
  invertArrow?: boolean;
  'aria-label': string;
  className: string;
  onClick: () => void;
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const ReachGoalButton = (props: ReachGoalButtonProps) => (
  <ButtonContainer
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
    aria-hidden={props.disabled ? 'true' : 'false'}
    aria-label={props['aria-label']}
  >
    <img
      src={Arrow}
      alt="arrow"
      aria-hidden="true"
      style={{
        width: 10,
        transform: props.invertArrow ? 'scaleX(-1)' : 'none'
      }}
    />
  </ButtonContainer>
);

export default ReachGoalButton;

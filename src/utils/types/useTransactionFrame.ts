import { ForwardedProps, UseTransitionResult } from 'react-spring';
import { CSSProperties } from 'react';

export type UseTransactionFrame = UseTransitionResult<
  Date,
  ForwardedProps<CSSProperties>
>;

// Disabling rule because of react-spring lack of support for TypeScrypt
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { ForwardedProps, UseTransitionResult } from 'react-spring';
import { CSSProperties } from 'react';
import { ReachGoalInputDate } from './ReachGoalInputDate';

export type UseTransactionFrame = UseTransitionResult<
  ReachGoalInputDate,
  ForwardedProps<CSSProperties>
>;

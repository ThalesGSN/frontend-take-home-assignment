import { ForwardedProps, UseTransitionResult } from 'react-spring';
import { CSSProperties } from 'react';

export type AnimationItem = {
  shouldShowNextAnimation: boolean;
  date: Date;
};
export type UseTransactionFrame = UseTransitionResult<
  AnimationItem,
  ForwardedProps<CSSProperties>
>;

import { AnimationItem } from '../../utils/types/useTransactionFrame';

const leftPosition = 'translate3d(100%,0,0)';
const rightPosition = 'translate3d(-75%,0,0)';
export const OnNextTransitionAnimation = {
  from: { opacity: 0 },
  enter: ({ shouldShowNextAnimation }: AnimationItem) => ({
    opacity: 1,
    transform: shouldShowNextAnimation ? leftPosition : rightPosition
  }),
  leave: ({ shouldShowNextAnimation }: AnimationItem) => ({
    opacity: 0,
    transform: shouldShowNextAnimation ? rightPosition : leftPosition
  })
};

export const GenerateAnimationKey = ({ date }: AnimationItem) =>
  `${date.getFullYear()}${date.getMonth()}`;

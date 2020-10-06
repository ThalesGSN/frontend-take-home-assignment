export const OnNextTransitionAnimation = {
  from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  enter: { opacity: 1, transform: 'translate3d(-50%,0,0)' },
  leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
};

export const OnPreviousTransitionAnimation = {
  from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  enter: { opacity: 1, transform: 'translate3d(-50%,0,0)' }
};

export const GenerateAnimationKey = (item: Date) =>
  `${item.getFullYear()}${item.getMonth()}`;

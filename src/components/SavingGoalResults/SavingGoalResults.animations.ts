import { MutableRefObject } from 'react';

export const ChangeResultAnimation: Keyframe[] = [
  {
    transform: 'translateY(-20px)',
    opacity: 0
  },
  {
    transform: 'translateY(0)',
    opacity: 1
  }
];

export const ChangeResultAnimationOptions = {
  duration: 250,
  iterations: 1,
  easing: 'ease-in'
};

export const AnimateRef = (ref: MutableRefObject<HTMLElement>) => {
  const element = ref.current;
  if (!element) {
    return;
  }

  element.animate(ChangeResultAnimation, ChangeResultAnimationOptions);
}

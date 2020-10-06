import { GenerateRefAnimationTrigger } from '../../utils/functions';

export const ReachGoalByInputAnimation: Keyframe[] = [
  { opacity: 0.3 },
  { opacity: 1 }
];

export const ReachGoalByInputAnimationOptions: KeyframeAnimationOptions = {
  duration: 500,
  iterations: 1,
  easing: 'ease-out'
};

export const ReachGoalByRefAnimation = GenerateRefAnimationTrigger(
  ReachGoalByInputAnimation,
  ReachGoalByInputAnimationOptions
);

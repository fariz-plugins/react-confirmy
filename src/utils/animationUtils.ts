import { Framework, DialogAnimationConfig } from '../types';

export const getAnimationClasses = (isOpen: boolean, framework: Framework): string => {
  switch (framework) {
    case 'tailwind':
      return `transform transition-all origin-center ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'}`;
    case 'bootstrap':
      return `fade ${isOpen ? 'show' : ''}`;
    default:
      return '';
  }
};

export const getAnimationStyles = (
  animation: DialogAnimationConfig,
  framework: Framework
): React.CSSProperties => {
  const { duration = 200, timing = 'ease-out' } = animation;

  // Don't apply custom animation styles if using bootstrap's built-in animations
  if (framework === 'bootstrap') {
    return {};
  }

  return {
    transitionProperty: 'all',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timing,
    transformOrigin: 'center',
    willChange: 'transform, opacity'
  };
};

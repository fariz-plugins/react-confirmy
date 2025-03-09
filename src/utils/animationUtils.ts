import { Framework, DialogAnimationConfig, DialogAnimationType } from '../types';

const ANIMATION_PRESETS = {
  fade: {
    enter: 'opacity-0',
    active: 'opacity-100',
    exit: 'opacity-0',
  },
  scale: {
    enter: 'opacity-0 scale-95',
    active: 'opacity-100 scale-100',
    exit: 'opacity-0 scale-95',
  },
  'slide-up': {
    enter: 'opacity-0 translate-y-4',
    active: 'opacity-100 translate-y-0',
    exit: 'opacity-0 translate-y-4',
  },
  'slide-down': {
    enter: 'opacity-0 -translate-y-4',
    active: 'opacity-100 translate-y-0',
    exit: 'opacity-0 -translate-y-4',
  },
  'slide-left': {
    enter: 'opacity-0 translate-x-4',
    active: 'opacity-100 translate-x-0',
    exit: 'opacity-0 translate-x-4',
  },
  'slide-right': {
    enter: 'opacity-0 -translate-x-4',
    active: 'opacity-100 translate-x-0',
    exit: 'opacity-0 -translate-x-4',
  },
  flip: {
    enter: 'opacity-0 rotateX-90',
    active: 'opacity-100 rotateX-0',
    exit: 'opacity-0 rotateX-90',
  },
  rotate: {
    enter: 'opacity-0 rotate-90',
    active: 'opacity-100 rotate-0',
    exit: 'opacity-0 -rotate-90',
  },
  bounce: {
    enter: 'opacity-0 scale-95',
    active: 'opacity-100 scale-100 animate-bounce',
    exit: 'opacity-0 scale-95',
  },
  none: {
    enter: '',
    active: '',
    exit: '',
  },
};

const TIMING_FUNCTIONS = {
  linear: 'linear',
  ease: 'ease',
  'ease-in': 'ease-in',
  'ease-out': 'ease-out',
  'ease-in-out': 'ease-in-out',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export const getAnimationClasses = (
  isOpen: boolean, 
  framework: Framework, 
  animation?: DialogAnimationConfig
): string => {
  if (!animation || animation.type === 'none') {
    switch (framework) {
      case 'tailwind':
        return isOpen ? 'opacity-100' : 'opacity-0';
      case 'bootstrap':
        return `fade ${isOpen ? 'show' : ''}`;
      default:
        return '';
    }
  }

  if (framework === 'bootstrap') {
    return `fade ${isOpen ? 'show' : ''}`;
  }

  const preset = animation.custom || ANIMATION_PRESETS[animation.type];
  const baseClasses = 'transform transition-all';
  const stateClasses = isOpen ? preset.active : (isOpen ? preset.exit : preset.enter);

  return `${baseClasses} ${stateClasses}`;
};

export const getAnimationStyles = (
  animation?: DialogAnimationConfig,
  framework?: Framework
): React.CSSProperties => {
  if (!animation || animation.type === 'none' || framework === 'bootstrap') {
    return {};
  }

  const { 
    duration = 200, 
    timing = 'ease-out',
    delay = 0 
  } = animation;

  return {
    transitionProperty: 'all',
    transitionDuration: `${duration}ms`,
    transitionDelay: delay ? `${delay}ms` : undefined,
    transitionTimingFunction: TIMING_FUNCTIONS[timing] || timing,
    transformOrigin: 'center',
    willChange: 'transform, opacity'
  };
};

// Helper function to generate keyframe animations
export const generateKeyframes = (animationType: DialogAnimationType): string => {
  switch (animationType) {
    case 'bounce':
      return `
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `;
    case 'flip':
      return `
        @keyframes flip {
          from { transform: perspective(400px) rotate3d(1, 0, 0, 90deg); }
          to { transform: perspective(400px) rotate3d(1, 0, 0, 0deg); }
        }
      `;
    default:
      return '';
  }
};

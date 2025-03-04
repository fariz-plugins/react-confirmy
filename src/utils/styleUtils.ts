import type { DialogSize, Framework, AnimationConfig } from '../../types';

/**
 * Get size-specific CSS classes based on the framework
 */
export const getSizeClasses = (size: DialogSize, framework: Framework) => {
  if (framework === 'tailwind') {
    return {
      sm: 'w-[280px]',
      md: 'w-[320px]',
      lg: 'w-[400px]'
    }[size];
  }
  return '';
};

/**
 * Get animation classes for opening/closing states
 */
export const getAnimationClasses = (isOpen: boolean, framework: Framework) => {
  if (framework === 'tailwind') {
    return isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
  }
  return '';
};

/**
 * Get animation styles based on animation configuration
 */
export const getAnimationStyles = (animation: AnimationConfig, isOpen: boolean, framework: Framework) => {
  if (framework === 'tailwind') {
    const baseTransition = `transition-all duration-${animation.duration} ${animation.timing}`;
    
    switch (animation.type) {
      case 'fade':
        return `${baseTransition} ${isOpen ? 'opacity-100' : 'opacity-0'}`;
      case 'scale':
        return `${baseTransition} ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;
      case 'slide':
        return `${baseTransition} transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`;
      case 'none':
        return '';
      default:
        if (animation.customKeyframes) {
          return animation.customKeyframes;
        }
        return '';
    }
  }
  return '';
};

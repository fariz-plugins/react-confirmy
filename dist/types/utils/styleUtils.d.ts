import type { DialogSize, Framework, AnimationConfig } from '../../types';
/**
 * Get size-specific CSS classes based on the framework
 */
export declare const getSizeClasses: (size: DialogSize, framework: Framework) => string;
/**
 * Get animation classes for opening/closing states
 */
export declare const getAnimationClasses: (isOpen: boolean, framework: Framework) => "" | "opacity-100 scale-100" | "opacity-0 scale-95";
/**
 * Get animation styles based on animation configuration
 */
export declare const getAnimationStyles: (animation: AnimationConfig, isOpen: boolean, framework: Framework) => string;

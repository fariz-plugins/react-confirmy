import type { DialogType, Framework, DialogIconProps } from '../types';
import { ComponentType } from 'react';
export declare const getDialogIcon: (type: DialogType, customIcon?: ComponentType<DialogIconProps>) => ComponentType<DialogIconProps>;
/**
 * Get icon color based on type and framework
 */
export declare const getIconColor: (type: DialogType, framework: Framework) => "" | "text-red-500" | "text-yellow-500" | "text-blue-500";

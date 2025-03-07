import { AlertCircleIcon, AlertTriangleIcon, InfoIcon } from '../components/icons';
import type { DialogType, Framework, DialogIconProps } from '../types';
import { ComponentType } from 'react';

/**
 * Get the appropriate icon component based on dialog type
 */
const iconMap: Record<DialogType, ComponentType<DialogIconProps>> = {
  info: InfoIcon,
  warning: AlertTriangleIcon,
  danger: AlertCircleIcon,
};

export const getDialogIcon = (type: DialogType, customIcon?: ComponentType<DialogIconProps>) => {
  if (customIcon) {
    return customIcon;
  }
  return iconMap[type] || InfoIcon;
};

/**
 * Get icon color based on type and framework
 */
export const getIconColor = (type: DialogType, framework: Framework) => {
  if (framework === 'tailwind') {
    return type === 'danger' ? 'text-red-500' : 
           type === 'warning' ? 'text-yellow-500' : 
           'text-blue-500';
  }
  return '';
};

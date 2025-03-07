import { AlertCircleIcon, AlertTriangleIcon, InfoIcon } from '../components/icons';
import type { DialogType, Framework } from '../../types';
import { ComponentType } from 'react';

/**
 * Get the appropriate icon component based on dialog type
 */
export const getDialogIcon = (type: DialogType, customIcon?: ComponentType<any>) => {
  if (customIcon) return customIcon;
  switch (type) {
    case 'danger':
      return AlertCircleIcon;
    case 'warning':
      return AlertTriangleIcon;
    case 'info':
      return InfoIcon;
    default:
      return AlertTriangleIcon;
  }
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

import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import type { DialogType, Framework } from '../../types';

/**
 * Get the appropriate icon component based on dialog type
 */
export const getDialogIcon = (type: DialogType, customIcon?: React.ComponentType) => {
  if (customIcon) return customIcon;
  switch (type) {
    case 'danger':
      return AlertCircle;
    case 'warning':
      return AlertTriangle;
    case 'info':
      return Info;
    default:
      return AlertTriangle;
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

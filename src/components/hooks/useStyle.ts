import { DialogIconProps, DialogStyleConfig, DialogType, Framework } from '../../types'; // Adjust the import path as needed
import { defaultStyles } from '../styles/defaultStyles';
import { AlertCircleIcon, AlertTriangleIcon, InfoIcon } from '../icons';

/**
 * Props for the useStyle hook
 */
interface UseStyleProps {
  framework: Framework; // Framework type (e.g., 'tailwind', 'bootstrap')
  styles?: Partial<DialogStyleConfig>; // Custom styles to override default styles
  size?: 'sm' | 'md' | 'lg'; // Size of the dialog
  darkMode?: boolean; // Whether dark mode is enabled
  type?: DialogType; // Type of the dialog (e.g., 'danger', 'warning', 'info')
  customIcon?: React.ComponentType<DialogIconProps>; // Custom icon component
}

/**
 * useStyle Hook
 * @param {UseStyleProps} props - Props for the dialog
 * @returns {object} - Merged styles and helper functions
 */
const useStyle = ({ framework, styles = {}, size = 'md', darkMode = false, type = 'warning', customIcon }: UseStyleProps) => {
  // Merge default styles with custom styles
  const mergedStyles: DialogStyleConfig = {
    ...defaultStyles[framework],
    ...styles,
  };

  /**
   * Helper function to get dark mode styles
   * @param {keyof DialogStyleConfig['darkMode']} key - Key for the dark mode style
   * @returns {string} - Dark mode class names
   */
  const getDarkModeStyles = (key: keyof NonNullable<DialogStyleConfig['darkMode']>): string => {
    if (!darkMode || !mergedStyles.darkMode) return '';
    return (typeof mergedStyles.darkMode[key] === 'string' ? mergedStyles.darkMode[key] : '') || '';
  };

  /**
   * Helper function to get size-specific classes
   * @returns {string} - Size-specific class names
   */
  const getSizeClass = (): string => {
    switch (size) {
      case 'sm':
        return mergedStyles.sizeSM || '';
      case 'md':
        return mergedStyles.sizeMD || '';
      case 'lg':
        return mergedStyles.sizeLG || '';
      default:
        return '';
    }
  };

  /**
   * Helper function to get confirm button styles based on type
   * @param {keyof DialogStyleConfig['confirmButton']} type - Type of the confirm button (e.g., 'danger', 'warning', 'info')
   * @returns {string} - Confirm button class names
   */
  const getConfirmButtonStyles = (type: keyof DialogStyleConfig['confirmButton']): string => {
    const baseStyles = mergedStyles.confirmButton[type];
    if (!darkMode || !mergedStyles.darkMode?.confirmButton) return baseStyles;
    return `${baseStyles} ${mergedStyles.darkMode.confirmButton[type] || ''}`;
  };

  /**
   * Helper function to get the appropriate icon for the dialog
   * @returns {React.ComponentType<DialogIconProps>} - Icon component
   */
  const getDialogIcon = (): React.ComponentType<DialogIconProps> => {
    if (customIcon) {
      return customIcon;
    }
    switch (type) {
      case 'danger':
        return AlertCircleIcon;
      case 'warning':
        return AlertTriangleIcon;
      case 'info':
        return InfoIcon;
      default:
        return InfoIcon;
    }
  };

  return {
    mergedStyles,
    getDarkModeStyles,
    getSizeClass,
    getConfirmButtonStyles,
    Icon: getDialogIcon(), // Return the resolved icon component
  };
};

export default useStyle;
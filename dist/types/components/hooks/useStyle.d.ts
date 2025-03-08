import { DialogIconProps, DialogStyleConfig, DialogType, Framework } from '../../types';
/**
 * Props for the useStyle hook
 */
interface UseStyleProps {
    framework: Framework;
    styles?: Partial<DialogStyleConfig>;
    size?: 'sm' | 'md' | 'lg';
    darkMode?: boolean;
    type?: DialogType;
    customIcon?: React.ComponentType<DialogIconProps>;
}
/**
 * useStyle Hook
 * @param {UseStyleProps} props - Props for the dialog
 * @returns {object} - Merged styles and helper functions
 */
declare const useStyle: ({ framework, styles, size, darkMode, type, customIcon }: UseStyleProps) => {
    mergedStyles: DialogStyleConfig;
    getDarkModeStyles: (key: keyof NonNullable<DialogStyleConfig["darkMode"]>) => string;
    getSizeClass: () => string;
    getConfirmButtonStyles: (type: keyof DialogStyleConfig["confirmButton"]) => string;
    Icon: import("react").ComponentType<DialogIconProps>;
};
export default useStyle;

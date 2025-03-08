import { ReactNode, SVGProps } from 'react';

export type DialogType = 'info' | 'warning' | 'danger';
export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogPosition = 'top' | 'center' | 'bottom';
export type Framework = 'tailwind' | 'bootstrap' | 'none';
export type DialogTransitionTiming = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface DialogAnimationConfig {
  type: 'fade' | 'scale' | 'slide' | 'none';
  duration: number;
  timing: DialogTransitionTiming;
  customKeyframes?: string;
}

export interface DialogAsyncOptions {
  loadingText?: string;
  successText?: string;
  errorText?: string;
  showLoadingSpinner?: boolean;
}

export interface DialogIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export interface DialogConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  triggerRef: React.RefObject<HTMLElement>;  // Required for proper positioning
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: DialogType;
  size?: DialogSize;  // Controls dialog width: sm (320px), md (400px), lg (512px)
  position?: DialogPosition;
  framework?: Framework;
  styles?: Partial<DialogStyleConfig>;
  className?: string;
  darkMode?: boolean;
  customIcon?: React.ComponentType<DialogIconProps>;
  animation?: DialogAnimationConfig;
  zIndex?: number;
  formFields?: DialogFormField[];  // Optional form fields to render in the dialog
  asyncOptions?: DialogAsyncOptions;
  stackOrder?: number;  // Used to calculate final z-index when multiple dialogs are open
}

export interface DialogState {
  id: string;
  props: DialogConfirmationProps;
}

export interface DialogContextType {
  dialogQueue: DialogState[];
  addDialog: (props: DialogConfirmationProps) => void;
  removeDialog: (id: string) => void;
  updateDialog: (id: string, props: Partial<DialogConfirmationProps>) => void;
}

export interface DialogProviderProps {
  children: ReactNode;
}

export interface DialogStyleConfig {
  container: string;
  arrow: string;
  closeButton: string;
  closeIcon: string;
  header: string;
  icon: string;
  title: string;
  message: string;
  form: string;  // Container for form fields
  formField: string;  // Container for each form field
  label: string;  // Label for form fields
  input: string;  // Input element styles
  footer: string;
  cancelButton: string;
  confirmButton: {
    danger: string;
    warning: string;
    info: string;
  };
  'sizeSM': string;  // Styles for small dialog size
  'sizeMD': string;  // Styles for medium dialog size
  'sizeLG': string;  // Styles for large dialog size
  darkMode?: {
    container?: string;
    title?: string;
    message?: string;
    label?: string;  // Dark mode label styles
    input?: string;  // Dark mode input styles
    cancelButton?: string;
    confirmButton?: {
      danger: string;
      warning: string;
      info: string;
    };
  };
}

export interface DialogFormField {
  name: string;  // Unique identifier for the form field
  label: string;  // Label text to display
  type?: string;  // HTML input type (text, email, number, etc.)
  required?: boolean;  // Whether the field is required
  placeholder?: string;  // Placeholder text for the input
}

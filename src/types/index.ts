import { ReactNode, SVGProps } from 'react';

export type DialogType = 'info' | 'warning' | 'danger';
export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogPosition = 'top' | 'center' | 'bottom';
export type Framework = 'tailwind' | 'bootstrap' | 'none';
export type TransitionTiming = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface DialogAnimationConfig {
  type: 'fade' | 'scale' | 'slide' | 'none';
  duration: number;
  timing: TransitionTiming;
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
  triggerRef?: React.RefObject<HTMLElement>;  // Optional for fixed positioning
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: DialogType;
  size?: DialogSize;
  position?: DialogPosition;
  framework?: Framework;
  styles?: Partial<DialogStyleConfig>;
  className?: string;
  darkMode?: boolean;
  customIcon?: React.ComponentType<DialogIconProps>;
  animation?: DialogAnimationConfig;
  zIndex?: number;
  formFields?: DialogFormField[];
  asyncOptions?: DialogAsyncOptions;
  stackOrder?: number;
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
  footer: string;
  cancelButton: string;
  confirmButton: {
    danger: string;
    warning: string;
    info: string;
  };
  darkMode?: {
    container?: string;
    title?: string;
    message?: string;
    cancelButton?: string;
    confirmButton?: {
      danger: string;
      warning: string;
      info: string;
    };
  };
}

export interface DialogFormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

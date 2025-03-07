import { ReactNode, SVGProps } from 'react';

export type DialogType = 'info' | 'warning' | 'danger';
export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogPosition = 'top' | 'center' | 'bottom';
export type Framework = 'tailwind' | 'bootstrap' | 'none';
export type TransitionTiming = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface AnimationConfig {
  type: 'fade' | 'scale' | 'slide' | 'none';
  duration: number;
  timing: TransitionTiming;
  customKeyframes?: string;
}

export interface AsyncConfirmOptions {
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

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  triggerRef?: React.RefObject<HTMLElement>;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: DialogType;
  size?: DialogSize;
  position?: DialogPosition;
  framework?: Framework;
  styles?: Partial<StyleConfig>;
  className?: string;
  darkMode?: boolean;
  customIcon?: React.ComponentType<DialogIconProps>;
  animation?: AnimationConfig;
  zIndex?: number;
  formFields?: DialogFormField[];
  asyncOptions?: AsyncConfirmOptions;
  stackOrder?: number;
}

export interface DialogState {
  id: string;
  props: ConfirmationDialogProps;
}

export interface DialogContextType {
  dialogQueue: DialogState[];
  addDialog: (props: ConfirmationDialogProps) => void;
  removeDialog: (id: string) => void;
  updateDialog: (id: string, props: Partial<ConfirmationDialogProps>) => void;
}

export interface DialogProviderProps {
  children: ReactNode;
}

export interface StyleConfig {
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

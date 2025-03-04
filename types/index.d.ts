import { RefObject, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export type DialogType = 'danger' | 'warning' | 'info';
export type Framework = 'tailwind' | 'bootstrap' | 'none';
export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogPosition = 'top' | 'bottom' | 'left' | 'right';
export type AnimationType = 'fade' | 'scale' | 'none';
export type TransitionTiming = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface AnimationConfig {
  type: AnimationType;
  duration: number;
  timing: TransitionTiming;
  customKeyframes?: string;
}

export interface DialogFormField {
  type: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select';
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  validation?: (value: any) => string | undefined;
}

export interface AsyncConfirmOptions {
  loadingText?: string;
  successText?: string;
  errorText?: string;
  timeout?: number;
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
    container: string;
    title: string;
    message: string;
    cancelButton: string;
    confirmButton: {
      danger: string;
      warning: string;
      info: string;
    };
  };
}

export interface ConfirmationDialogProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (formData?: Record<string, any>) => void | Promise<void>;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: DialogType;
  size?: DialogSize;
  position?: DialogPosition;
  triggerRef: RefObject<HTMLElement>;
  framework?: Framework;
  styles?: Partial<StyleConfig>;
  className?: string;
  darkMode?: boolean;
  customIcon?: LucideIcon;
  animation?: AnimationConfig;
  zIndex?: number;
  formFields?: DialogFormField[];
  asyncOptions?: AsyncConfirmOptions;
  stackOrder?: number;
  nested?: boolean;
  parentId?: string;
}

export interface DialogProviderProps {
  children: ReactNode;
}

export interface DialogContextType {
  dialogQueue: DialogState[];
  addDialog: (dialog: DialogState) => void;
  removeDialog: (id: string) => void;
  updateDialog: (id: string, props: Partial<ConfirmationDialogProps>) => void;
}

export interface DialogState {
  id: string;
  props: ConfirmationDialogProps;
}

export declare const DialogProvider: React.FC<DialogProviderProps>;
export declare const useDialog: () => DialogContextType;
export declare const Confirmy: React.FC<ConfirmationDialogProps>;
import { ReactNode } from 'react';

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  triggerRef?: React.RefObject<HTMLElement>;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'info' | 'warning' | 'danger';
  framework?: Framework;
  styles?: Partial<StyleConfig>;
  className?: string;
  darkMode?: boolean;
  customIcon?: React.ComponentType<any>;
  zIndex?: number;
  formFields?: DialogFormField[];
  position?: 'top' | 'center' | 'bottom';
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

export type Framework = 'tailwind' | 'bootstrap' | 'none';

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

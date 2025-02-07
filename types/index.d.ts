import { RefObject } from 'react';

export type DialogType = 'danger' | 'warning' | 'info';
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
}

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: DialogType;
  triggerRef: RefObject<HTMLElement>;
  framework?: Framework;
  styles?: Partial<StyleConfig>;
  className?: string;
}

export declare const ConfirmationDialog: React.FC<ConfirmationDialogProps>;
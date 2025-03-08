import { useState } from 'react';
import { XIcon, AlertCircleIcon, AlertTriangleIcon, InfoIcon } from './icons';
import type { DialogConfirmationProps, DialogType, DialogIconProps, DialogStyleConfig } from '../types';
import { useConfirmy } from './hooks/useConfirmy';
import { useDialogPosition } from './hooks/useDialogPosition';
import { defaultStyles } from './styles/defaultStyles';

const getDialogIcon = (type: DialogType, customIcon?: React.ComponentType<DialogIconProps>) => {
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

export function Confirmy({
  isOpen,
  onClose,
  onConfirm,
  triggerRef,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'warning',
  size = 'md',
  position = 'top',
  framework = 'tailwind',
  styles = {},
  className = '',
  darkMode = false,
  customIcon,
  animation,
  zIndex = 50,
  formFields = [],
  asyncOptions,
  stackOrder = 0
}: DialogConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dialogRef, arrowRef, getPositionClasses } = useDialogPosition({
    isOpen,
    triggerRef,
    position
  });
  const { handleClose, handleConfirm } = useConfirmy({
    onClose,
    onConfirm,
    setIsLoading,
    setError,
    asyncOptions
  });

  const mergedStyles = {
    ...defaultStyles[framework],
    ...styles
  };

  const Icon = getDialogIcon(type, customIcon);

  type DarkModeKey = keyof NonNullable<DialogStyleConfig['darkMode']>;

  const getDarkModeStyles = (key: DarkModeKey) => {
    if (!darkMode || !mergedStyles.darkMode) return '';
    return mergedStyles.darkMode[key] || '';
  };

  const getConfirmButtonStyles = () => {
    const baseStyles = mergedStyles.confirmButton[type];
    if (!darkMode || !mergedStyles.darkMode?.confirmButton) return baseStyles;
    return `${baseStyles} ${mergedStyles.darkMode.confirmButton[type] || ''}`;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      className={`
        ${getPositionClasses()}
        ${mergedStyles.container}
        ${getDarkModeStyles('container')}
        ${className}
        ${mergedStyles[`size-${size}`] || ''}
      `}
      style={{ zIndex: zIndex + (stackOrder * 10) }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      {triggerRef && <div ref={arrowRef} className={mergedStyles.arrow} data-popper-arrow />}
      <button
        onClick={handleClose}
        className={mergedStyles.closeButton}
        aria-label="Close dialog"
      >
        <XIcon className={mergedStyles.closeIcon} />
      </button>

      <div className={mergedStyles.header}>
        <Icon className={mergedStyles.icon} />
        <h3
          id="dialog-title"
          className={`
            ${mergedStyles.title}
            ${getDarkModeStyles('title')}
          `}
        >
          {title}
        </h3>
      </div>

      <p
        className={`
          ${mergedStyles.message}
          ${getDarkModeStyles('message')}
        `}
      >
        {error || message}
      </p>

      {formFields.length > 0 && (
        <div className={mergedStyles.form}>
          {formFields.map((field, index) => (
            <div key={field.name} className={mergedStyles.formField}>
              <label htmlFor={field.name} className={mergedStyles.label}>
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                id={field.name}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                required={field.required}
                className={mergedStyles.input}
              />
            </div>
          ))}
        </div>
      )}

      <div className={mergedStyles.footer}>
        <button
          onClick={handleClose}
          className={`
            ${mergedStyles.cancelButton}
            ${getDarkModeStyles('cancelButton')}
          `}
          disabled={isLoading}
        >
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className={getConfirmButtonStyles()}
          disabled={isLoading}
        >
          {isLoading && asyncOptions?.loadingText ? asyncOptions.loadingText : confirmText}
        </button>
      </div>
    </div>
  );
}

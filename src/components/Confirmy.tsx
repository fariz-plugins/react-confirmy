import { useState } from 'react';
import type { DialogConfirmationProps } from '../types';
import { XIcon } from './icons';
import { useDialogPosition } from './hooks/useDialogPosition';
import clsx from 'clsx';
import useStyle from './hooks/useStyle';
import { getAnimationClasses, getAnimationStyles } from '../utils/animationUtils';
import { useConfirmy } from './hooks/useConfirmy';
import { useAsyncOptions } from './hooks/useAsyncOptions';

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
  zIndex = 50,
  animation = { type: 'fade', duration: 200, timing: 'ease-out' },
  stackOrder = 0,
  formFields = [],
  asyncOptions,
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

  const { mergedStyles, getDarkModeStyles, getSizeClass, getConfirmButtonStyles, Icon } = useStyle({
    framework,
    styles,
    size,
    darkMode,
    type,
    customIcon,
  });

  if (!isOpen) return null;

  const parentContainerClassName = clsx(
    getPositionClasses(),
    getAnimationClasses(isOpen, framework, animation),
    mergedStyles.container,
    getDarkModeStyles('container'),
    getSizeClass(),
    className
  );

  const animationStyles = getAnimationStyles(animation, framework);

  return (
    <div
      ref={dialogRef}
      className={parentContainerClassName}
      style={{ 
        zIndex: zIndex + (stackOrder * 10),
        ...animationStyles
      }}
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

      <div className={mergedStyles.content}>
        <p
          className={`
            ${mergedStyles.message}
            ${getDarkModeStyles('message')}
          `}
        >
          {error || message}
        </p>
      </div>

      {formFields.length > 0 && (
        <div className={mergedStyles.form}>
          {formFields.map((field) => (
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
          className={getConfirmButtonStyles(type)}
          disabled={isLoading}
        >
          {isLoading && asyncOptions?.loadingText ? asyncOptions.loadingText : confirmText}
        </button>
      </div>
    </div>
  );
}

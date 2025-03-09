import type { DialogConfirmationProps } from '../types';
import { XIcon } from './icons';
import { useDialogPosition } from './hooks/useDialogPosition';
import { useAsyncDialog } from './hooks/useAsyncDialog';
import { LoadingSpinner } from './LoadingSpinner';
import clsx from 'clsx';
import useStyle from './hooks/useStyle';

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
  formFields = [],
  asyncOptions,
  stackOrder = 0
}: DialogConfirmationProps) {
  const { dialogRef, arrowRef, getPositionClasses } = useDialogPosition({
    isOpen,
    triggerRef,
    position
  });

  const { 
    isLoading, 
    error, 
    progress,
    handleConfirm, 
    handleRetry
  } = useAsyncDialog({
    onConfirm,
    asyncOptions,
    onClose
  });

  // Use the useStyle hook
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
    mergedStyles.container,
    getDarkModeStyles('container'),
    getSizeClass(),
    className
  );

  return (
    <div
      ref={dialogRef}
      className={parentContainerClassName}
      style={{ zIndex: zIndex + (stackOrder * 10) }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      {triggerRef && <div ref={arrowRef} className={mergedStyles.arrow} data-popper-arrow />}
      <button
        onClick={onClose}
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
            ${error ? 'text-red-500' : ''}
          `}
        >
          {error || message}
        </p>

        {asyncOptions?.progressIndicator && isLoading && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

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
                  disabled={isLoading}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={mergedStyles.footer}>
        <button
          onClick={onClose}
          className={`
            ${mergedStyles.cancelButton}
            ${getDarkModeStyles('cancelButton')}
          `}
          disabled={isLoading}
        >
          {cancelText}
        </button>
        {error ? (
          <button
            onClick={handleRetry}
            className={getConfirmButtonStyles(type)}
            disabled={isLoading}
          >
            Retry
          </button>
        ) : (
          <button
            onClick={handleConfirm}
            className={getConfirmButtonStyles(type)}
            disabled={isLoading}
          >
            {isLoading && asyncOptions?.showLoadingSpinner && (
              <LoadingSpinner 
                size={asyncOptions?.spinnerSize || 16} 
                color={asyncOptions?.spinnerColor} 
                className="mr-2 inline-block"
              />
            )}
            {isLoading && asyncOptions?.loadingText ? asyncOptions.loadingText : confirmText}
          </button>
        )}
      </div>
    </div>
  );
}

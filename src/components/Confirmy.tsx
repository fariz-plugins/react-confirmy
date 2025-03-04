import React from 'react';
import { X } from 'lucide-react';
import type { ConfirmationDialogProps } from '../../types';
import { useConfirmy } from '../hooks/useConfirmy';
import { defaultStyles } from '../styles/defaultStyles';
import { getSizeClasses, getAnimationClasses, getAnimationStyles } from '../utils/styleUtils';
import { getDialogIcon, getIconColor } from '../utils/iconUtils';

/**
 * Confirmy Dialog Component
 * A customizable confirmation dialog with support for different frameworks, animations, and async operations
 */
export const Confirmy: React.FC<ConfirmationDialogProps> = (props) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    title = 'Confirm Action',
    message = 'Are you sure you want to proceed?',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    type = 'warning',
    size = 'md',
    framework = 'tailwind',
    styles = {},
    className = '',
    darkMode = false,
    customIcon,
    animation = { type: 'scale', duration: 200, timing: 'ease-out' },
    zIndex = 50,
    formFields = [],
    nested = false,
    parentId,
  } = props;

  const {
    dialogRef,
    arrowRef,
    firstFocusableRef,
    formData,
    isLoading,
    status,
    handleFormChange,
    handleConfirm,
  } = useConfirmy(props);

  if (!isOpen) return null;

  const Icon = getDialogIcon(type, customIcon);
  const iconColorClass = getIconColor(type, framework);

  // Get status text for async operations
  const getStatusText = () => {
    return status || message;
  };

  // Merge default styles with custom styles
  const mergedStyles = {
    ...defaultStyles[framework],
    ...styles,
  };

  // Render form fields if provided
  const renderFormFields = () => {
    return formFields.map((field) => (
      <div key={field.name} className="mb-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {field.label}
        </label>
        <input
          type={field.type || 'text'}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={(e) => handleFormChange(field.name, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required={field.required}
          placeholder={field.placeholder}
        />
      </div>
    ));
  };

  return (
    <div
      ref={dialogRef}
      className={`
        ${mergedStyles.container}
        ${getSizeClasses(size, framework)}
        ${getAnimationClasses(isOpen, framework)}
        ${getAnimationStyles(animation, isOpen, framework)}
        ${className}
        ${darkMode ? mergedStyles.darkMode?.container : ''}
      `}
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-message"
      data-parent-id={parentId}
    >
      <div
        ref={arrowRef}
        className={mergedStyles.arrow}
        data-popper-arrow
      />

      <button
        ref={firstFocusableRef}
        onClick={onClose}
        className={mergedStyles.closeButton}
        aria-label="Close dialog"
      >
        <X className={mergedStyles.closeIcon} />
      </button>

      <div className={mergedStyles.header}>
        <Icon className={`${mergedStyles.icon} ${iconColorClass}`} />
        <h3 id="dialog-title" className={`${mergedStyles.title} ${darkMode ? mergedStyles.darkMode?.title : ''}`}>
          {title}
        </h3>
      </div>

      <p id="dialog-message" className={`${mergedStyles.message} ${darkMode ? mergedStyles.darkMode?.message : ''}`}>
        {getStatusText()}
      </p>

      {formFields.length > 0 && (
        <div className="mb-4">
          {renderFormFields()}
        </div>
      )}

      <div className={mergedStyles.footer}>
        <button
          onClick={onClose}
          className={`${mergedStyles.cancelButton} ${darkMode ? mergedStyles.darkMode?.cancelButton : ''}`}
          disabled={isLoading}
        >
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className={`
            ${mergedStyles.confirmButton[type]}
            ${darkMode ? mergedStyles.darkMode?.confirmButton[type] : ''}
          `}
          disabled={isLoading}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

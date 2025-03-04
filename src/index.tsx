import React, { useEffect, useRef, useCallback, createContext, useContext, useState } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { X, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import type {
  DialogType,
  Framework,
  DialogSize,
  DialogPosition,
  StyleConfig,
  ConfirmationDialogProps,
  DialogProviderProps,
  DialogContextType,
  DialogState,
  DialogFormField,
  AsyncConfirmOptions,
  AnimationConfig,
  TransitionTiming
} from '../types';
import { useConfirmy } from './hooks/useConfirmy';

const defaultStyles: Record<Framework, StyleConfig> = {
  tailwind: {
    container: 'z-50 bg-white rounded-lg shadow-xl p-4 border border-gray-200 transition-all duration-200',
    arrow: 'absolute w-2 h-2',
    closeButton: 'absolute right-2 top-2 text-gray-400 hover:text-gray-500',
    closeIcon: 'w-4 h-4',
    header: 'flex items-center gap-2 mb-3',
    icon: 'w-5 h-5',
    title: 'text-base font-semibold text-gray-900',
    message: 'text-sm text-gray-600 mb-4',
    footer: 'flex justify-end gap-2',
    cancelButton: 'px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md',
    confirmButton: {
      danger: 'px-3 py-1.5 text-xs font-medium text-white rounded-md bg-red-600 hover:bg-red-700',
      warning: 'px-3 py-1.5 text-xs font-medium text-white rounded-md bg-yellow-600 hover:bg-yellow-700',
      info: 'px-3 py-1.5 text-xs font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700'
    },
    darkMode: {
      container: 'bg-gray-800 border-gray-700',
      title: 'text-gray-100',
      message: 'text-gray-300',
      cancelButton: 'text-gray-300 bg-gray-700 hover:bg-gray-600',
      confirmButton: {
        danger: 'bg-red-500 hover:bg-red-600',
        warning: 'bg-yellow-500 hover:bg-yellow-600',
        info: 'bg-blue-500 hover:bg-blue-600'
      }
    }
  },
  bootstrap: {
    container: 'popover bs-popover-auto bg-white rounded shadow-lg p-3 border transition',
    arrow: 'popover-arrow position-absolute',
    closeButton: 'btn-close position-absolute top-0 end-0 p-2',
    closeIcon: 'd-none',
    header: 'd-flex align-items-center gap-2 mb-2',
    icon: '',
    title: 'h6 mb-0',
    message: 'small text-body-secondary mb-3',
    footer: 'd-flex justify-content-end gap-2',
    cancelButton: 'btn btn-sm btn-light',
    confirmButton: {
      danger: 'btn btn-sm btn-danger',
      warning: 'btn btn-sm btn-warning',
      info: 'btn btn-sm btn-primary'
    },
    darkMode: {
      container: 'bg-dark text-light border-secondary',
      title: 'text-light',
      message: 'text-light-50',
      cancelButton: 'btn-dark',
      confirmButton: {
        danger: 'btn-outline-danger',
        warning: 'btn-outline-warning',
        info: 'btn-outline-primary'
      }
    }
  },
  none: {
    container: '',
    arrow: '',
    closeButton: '',
    closeIcon: '',
    header: '',
    icon: '',
    title: '',
    message: '',
    footer: '',
    cancelButton: '',
    confirmButton: {
      danger: '',
      warning: '',
      info: ''
    }
  }
};

const DialogContext = createContext<DialogContextType>({
  dialogQueue: [],
  addDialog: () => {},
  removeDialog: () => {},
  updateDialog: () => {},
});

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [dialogQueue, setDialogQueue] = useState<DialogState[]>([]);

  const addDialog = (dialog: DialogState) => {
    setDialogQueue(prev => [...prev, dialog]);
  };

  const removeDialog = (id: string) => {
    setDialogQueue(prev => prev.filter(d => d.id !== id));
  };

  const updateDialog = (id: string, props: Partial<ConfirmationDialogProps>) => {
    setDialogQueue(prev => 
      prev.map(d => d.id === id ? { ...d, props: { ...d.props, ...props } } : d)
    );
  };

  return (
    <DialogContext.Provider value={{ dialogQueue, addDialog, removeDialog, updateDialog }}>
      {children}
      {dialogQueue.map(dialog => (
        <Confirmy key={dialog.id} {...dialog.props} />
      ))}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

const getSizeClasses = (size: DialogSize, framework: Framework) => {
  if (framework === 'tailwind') {
    return {
      sm: 'w-[280px]',
      md: 'w-[320px]',
      lg: 'w-[400px]'
    }[size];
  }
  return '';
};

const getAnimationClasses = (isOpen: boolean, framework: Framework) => {
  if (framework === 'tailwind') {
    return isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
  }
  return '';
};

const getAnimationStyles = (animation: AnimationConfig, isOpen: boolean, framework: Framework) => {
  if (framework === 'tailwind') {
    const baseTransition = `transition-all duration-${animation.duration} ${animation.timing}`;
    
    switch (animation.type) {
      case 'fade':
        return `${baseTransition} ${isOpen ? 'opacity-100' : 'opacity-0'}`;
      case 'scale':
        return `${baseTransition} ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;
      case 'slide':
        return `${baseTransition} transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`;
      case 'none':
        return '';
      default:
        if (animation.customKeyframes) {
          return animation.customKeyframes;
        }
        return '';
    }
  }
  return '';
};

const Confirmy: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'warning',
  size = 'md',
  position = 'top',
  triggerRef,
  framework = 'tailwind',
  styles = {},
  className = '',
  darkMode = false,
  customIcon,
  animation = { type: 'scale', duration: 200, timing: 'ease-out' },
  zIndex = 50,
  formFields = [],
  asyncOptions,
  stackOrder = 0,
  nested = false,
  parentId,
  children
}) => {
  const {
    dialogRef,
    arrowRef,
    firstFocusableRef,
    lastFocusableRef,
    formData,
    isLoading,
    status,
    handleFormChange,
    handleConfirm,
  } = useConfirmy({
    isOpen,
    onClose,
    onConfirm,
    triggerRef,
    position,
    formFields,
    asyncOptions,
  });

  const mergedStyles: StyleConfig = {
    ...defaultStyles[framework],
    ...styles
  };

  if (!isOpen) return null;

  const getIcon = () => {
    if (customIcon) return customIcon;
    switch (type) {
      case 'danger':
        return AlertCircle;
      case 'warning':
        return AlertTriangle;
      case 'info':
        return Info;
      default:
        return AlertTriangle;
    }
  };

  const Icon = getIcon();

  const getIconColor = () => {
    if (framework === 'tailwind') {
      return type === 'danger' ? 'text-red-500' : 
             type === 'warning' ? 'text-yellow-500' : 
             'text-blue-500';
    }
    return '';
  };

  const renderFormFields = () => {
    return formFields.map(field => (
      <div key={field.name} className="mb-4">
        <label className={`block mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          {field.label}
          {field.required && <span className="text-red-500">*</span>}
        </label>
        
        {field.type === 'text' && (
          <input
            type="text"
            name={field.name}
            value={formData[field.name] || ''}
            onChange={e => handleFormChange(field.name, e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
          />
        )}
        
        {field.type === 'textarea' && (
          <textarea
            name={field.name}
            value={formData[field.name] || ''}
            onChange={e => handleFormChange(field.name, e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
          />
        )}

        {field.type === 'select' && field.options && (
          <select
            name={field.name}
            value={formData[field.name] || ''}
            onChange={e => handleFormChange(field.name, e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
          >
            <option value="">Select an option</option>
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
    ));
  };

  return (
    <div
      ref={dialogRef}
      className={`
        ${mergedStyles.container}
        ${darkMode ? mergedStyles.darkMode?.container || '' : ''}
        ${getSizeClasses(size, framework)}
        ${getAnimationStyles(animation, isOpen, framework)}
        ${className}
      `}
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div ref={arrowRef} className={mergedStyles.arrow} />
      
      <button
        ref={firstFocusableRef}
        className={mergedStyles.closeButton}
        onClick={onClose}
        aria-label="Close dialog"
      >
        <X className={mergedStyles.closeIcon} />
      </button>

      <div className={mergedStyles.header}>
        <Icon className={`${mergedStyles.icon} ${getIconColor()}`} />
        <h3
          id="dialog-title"
          className={`${mergedStyles.title} ${darkMode ? mergedStyles.darkMode?.title || '' : ''}`}
        >
          {title}
        </h3>
      </div>

      <p className={`${mergedStyles.message} ${darkMode ? mergedStyles.darkMode?.message || '' : ''}`}>
        {message}
      </p>

      {formFields.length > 0 && renderFormFields()}

      {status === 'loading' && asyncOptions?.loadingText && (
        <p className="text-sm text-gray-500 mb-2">{asyncOptions.loadingText}</p>
      )}
      {status === 'error' && asyncOptions?.errorText && (
        <p className="text-sm text-red-500 mb-2">{asyncOptions.errorText}</p>
      )}
      {status === 'success' && asyncOptions?.successText && (
        <p className="text-sm text-green-500 mb-2">{asyncOptions.successText}</p>
      )}

      <div className={mergedStyles.footer}>
        <button
          className={`${mergedStyles.cancelButton} ${darkMode ? mergedStyles.darkMode?.cancelButton || '' : ''}`}
          onClick={onClose}
          disabled={isLoading}
        >
          {cancelText}
        </button>
        <button
          ref={lastFocusableRef}
          className={`${mergedStyles.confirmButton[type]} ${darkMode ? mergedStyles.darkMode?.confirmButton?.[type] || '' : ''}`}
          onClick={handleConfirm}
          disabled={isLoading}
        >
          {confirmText}
        </button>
      </div>

      {children}
    </div>
  );
};

export default Confirmy;
import { useEffect, useRef, useState, useCallback } from 'react';
import { Instance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import type { DialogFormField, ConfirmationDialogProps } from '../../types';

/**
 * Custom hook for managing Confirmy dialog state and functionality
 */
export const useConfirmy = (props: ConfirmationDialogProps) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    triggerRef,
    position,
    formFields = [],
    asyncOptions,
  } = props;

  const dialogRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<Instance | null>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    formFields.forEach(field => {
      if (field.validation) {
        const error = field.validation(formData[field.name]);
        if (error) errors[field.name] = error;
      }
      if (field.required && !formData[field.name]) {
        errors[field.name] = 'This field is required';
      }
    });
    return errors;
  };

  const handleConfirm = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // Handle validation errors
      return;
    }

    if (typeof onConfirm === 'function') {
      try {
        setIsLoading(true);
        setStatus('loading');
        
        const result = await Promise.resolve(onConfirm(formData));
        
        setStatus('success');
        if (asyncOptions?.successText) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        onClose();
      } catch (error) {
        setStatus('error');
        if (asyncOptions?.errorText) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          event.preventDefault();
          lastFocusableRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          event.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen || !triggerRef?.current || !dialogRef.current) return;

    const cleanup = () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    popperInstanceRef.current = createPopper(triggerRef.current, dialogRef.current, {
      placement: position,
      modifiers: [
        {
          name: 'offset',
          options: { offset: [0, 8] }
        },
        {
          name: 'arrow',
          options: {
            element: arrowRef.current,
            padding: 5
          }
        },
        {
          name: 'preventOverflow',
          options: {
            padding: 8,
            altAxis: true
          }
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom', 'right', 'left']
          }
        }
      ]
    });

    firstFocusableRef.current?.focus();

    return cleanup;
  }, [isOpen, triggerRef, handleClickOutside, handleKeyDown, position]);

  useEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, [props.message]);

  return {
    dialogRef,
    arrowRef,
    firstFocusableRef,
    lastFocusableRef,
    formData,
    isLoading,
    status,
    handleFormChange,
    handleConfirm,
    handleClickOutside,
    handleKeyDown,
    validateForm,
  };
};

import { useState } from 'react';
import type { DialogAsyncOptions } from '../../types';

interface UseConfirmyProps {
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  asyncOptions?: DialogAsyncOptions;
}

/**
 * Custom hook for managing Confirmy dialog state and functionality
 */
export const useConfirmy = ({
  onClose,
  onConfirm,
  setIsLoading,
  setError,
  asyncOptions
}: UseConfirmyProps) => {
  const handleClose = () => {
    setError(null);
    onClose();
  };

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
      if (asyncOptions?.successText) {
        setError(asyncOptions.successText);
      }
    } catch (error) {
      if (asyncOptions?.errorText) {
        setError(asyncOptions.errorText);
      } else {
        setError('An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleClose,
    handleConfirm
  };
};

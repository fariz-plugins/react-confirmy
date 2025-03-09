import { useState, useCallback } from 'react';
import type { DialogAsyncOptions } from '../../types';

interface UseAsyncDialogProps {
  onConfirm: () => Promise<void> | void;
  asyncOptions?: DialogAsyncOptions;
  onClose: () => void;
}

interface AsyncState {
  isLoading: boolean;
  error: string | null;
  progress: number;
  retryCount: number;
}

export function useAsyncDialog({ onConfirm, asyncOptions, onClose }: UseAsyncDialogProps) {
  const [state, setState] = useState<AsyncState>({
    isLoading: false,
    error: null,
    progress: 0,
    retryCount: 0,
  });

  const resetState = useCallback(() => {
    setState({
      isLoading: false,
      error: null,
      progress: 0,
      retryCount: 0,
    });
  }, []);

  const handleRetry = useCallback(async () => {
    if (state.retryCount >= (asyncOptions?.retryAttempts || 3)) {
      setState(prev => ({ ...prev, error: "Maximum retry attempts reached" }));
      return;
    }

    setState(prev => ({ 
      ...prev, 
      isLoading: true, 
      error: null,
      retryCount: prev.retryCount + 1 
    }));

    try {
      await onConfirm();
      setState(prev => ({ ...prev, isLoading: false }));
      if (asyncOptions?.successText) {
        // Show success message briefly before closing
        setTimeout(onClose, 1500);
      } else {
        onClose();
      }
    } catch (err) {
      setState(prev => ({ 
        ...prev, 
        isLoading: false,
        error: (err as Error).message || asyncOptions?.errorText || 'Operation failed'
      }));

      if (asyncOptions?.retryDelay) {
        setTimeout(() => {
          asyncOptions.onRetry?.();
        }, asyncOptions.retryDelay);
      }
    }
  }, [state.retryCount, asyncOptions, onConfirm, onClose]);

  const handleConfirm = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      await onConfirm();
      setState(prev => ({ ...prev, isLoading: false }));
      if (asyncOptions?.successText) {
        // Show success message briefly before closing
        setTimeout(onClose, 1500);
      } else {
        onClose();
      }
    } catch (err) {
      setState(prev => ({ 
        ...prev, 
        isLoading: false,
        error: (err as Error).message || asyncOptions?.errorText || 'Operation failed'
      }));
    }
  }, [onConfirm, onClose, asyncOptions]);

  const updateProgress = useCallback((progress: number) => {
    setState(prev => ({ ...prev, progress: Math.min(100, Math.max(0, progress)) }));
  }, []);

  return {
    ...state,
    handleConfirm,
    handleRetry,
    updateProgress,
    resetState,
  };
}

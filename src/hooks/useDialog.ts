import { useContext } from 'react';
import { DialogContext } from '../context/DialogContext';

/**
 * Hook for accessing dialog context and its methods
 * @throws Error if used outside of DialogProvider
 */
export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

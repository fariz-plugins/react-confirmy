// File: useDialog.ts
import React from 'react';
import { DialogContext } from '../contexts/DialogContext';

export function useDialog() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}
import React from 'react';
import type { DialogState, ConfirmationDialogProps } from '../../types';

// Define the shape of the context value
export interface DialogContextValue {
  dialogQueue: DialogState[];
  addDialog: (props: ConfirmationDialogProps) => void;
  removeDialog: (id: string) => void;
  updateDialog: (id: string, props: Partial<ConfirmationDialogProps>) => void;
}

// Create the context with a default value (optional but recommended for TypeScript)
export const DialogContext = React.createContext<DialogContextValue | null>(null);
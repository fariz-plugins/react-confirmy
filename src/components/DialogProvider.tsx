import React, { useState } from 'react';
import type { DialogProviderProps, DialogState, ConfirmationDialogProps } from '../types';
import { DialogContext } from '../contexts/DialogContext';

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialogQueue, setDialogQueue] = useState<DialogState[]>([]);

  // Function to add a new dialog to the queue
  const addDialog = (props: ConfirmationDialogProps) => {
    const dialog: DialogState = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      props,
    };
    setDialogQueue((prev) => [...prev, dialog]);
  };

  // Function to remove a dialog from the queue by its ID
  const removeDialog = (id: string) => {
    setDialogQueue((prev) => prev.filter((dialog) => dialog.id !== id));
  };

  // Function to update a dialog's props by its ID
  const updateDialog = (id: string, props: Partial<ConfirmationDialogProps>) => {
    setDialogQueue((prev) =>
      prev.map((dialog) =>
        dialog.id === id ? { ...dialog, props: { ...dialog.props, ...props } } : dialog
      )
    );
  };

  // Provide the context value to the children
  return (
    <DialogContext.Provider value={{ dialogQueue, addDialog, removeDialog, updateDialog }}>
      {children}
    </DialogContext.Provider>
  );
}
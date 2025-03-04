import React, { createContext, useContext, useState } from 'react';
import type { DialogContextType, DialogProviderProps, DialogState, ConfirmationDialogProps } from '../../types';
import { Confirmy } from '../components/Confirmy';

/**
 * Context for managing dialog state across the application
 */
export const DialogContext = createContext<DialogContextType>({
  dialogQueue: [],
  addDialog: () => {},
  removeDialog: () => {},
  updateDialog: () => {},
});

/**
 * Provider component that manages dialog state and renders active dialogs
 */
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

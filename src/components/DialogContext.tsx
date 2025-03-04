import React, { createContext, useContext, useState } from 'react';
import type { DialogContextType, DialogProviderProps, DialogState, ConfirmationDialogProps } from '../../types';
import { Confirmy } from './Confirmy';

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialogQueue, setDialogQueue] = useState<DialogState[]>([]);

  const addDialog = (props: ConfirmationDialogProps) => {
    const dialog: DialogState = {
      id: Math.random().toString(36).substr(2, 9),
      props
    };
    setDialogQueue(prev => [...prev, dialog]);
  };

  const removeDialog = (id: string) => {
    setDialogQueue(prev => prev.filter(dialog => dialog.id !== id));
  };

  const updateDialog = (id: string, props: Partial<ConfirmationDialogProps>) => {
    setDialogQueue(prev => prev.map(dialog => 
      dialog.id === id ? { ...dialog, props: { ...dialog.props, ...props } } : dialog
    ));
  };

  return (
    <DialogContext.Provider value={{ dialogQueue, addDialog, removeDialog, updateDialog }}>
      {children}
      {dialogQueue.map((dialog) => (
        <Confirmy
          key={dialog.id}
          {...dialog.props}
          onClose={() => {
            dialog.props.onClose?.();
            removeDialog(dialog.id);
          }}
        />
      ))}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}

export { DialogContext };

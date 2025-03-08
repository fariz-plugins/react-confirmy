import  { createContext, useState } from 'react';
import type { DialogContextType, DialogProviderProps, DialogState, DialogConfirmationProps } from '../../types';
import { Confirmy } from '../Confirmy';

/**
 * Context for managing dialog state and queue
 */
export const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialogQueue, setDialogQueue] = useState<DialogState[]>([]);

  const addDialog = (props: DialogConfirmationProps) => {
    const dialog: DialogState = {
      id: Math.random().toString(36).substr(2, 9),
      props
    };
    setDialogQueue(prev => [...prev, dialog]);
  };

  const removeDialog = (id: string) => {
    setDialogQueue(prev => prev.filter(dialog => dialog.id !== id));
  };

  const updateDialog = (id: string, props: Partial<DialogConfirmationProps>) => {
    setDialogQueue(prev => prev.map(dialog => 
      dialog.id === id ? { ...dialog, props: { ...dialog.props, ...props } } : dialog
    ));
  };

  return (
    <DialogContext.Provider value={{ dialogQueue, addDialog, removeDialog, updateDialog }}>
      {children}
      {dialogQueue.map(dialog => (
        <Confirmy key={dialog.id} {...dialog.props} />
      ))}
    </DialogContext.Provider>
  );
}
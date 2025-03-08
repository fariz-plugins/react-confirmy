import React from 'react';
import type { DialogContextType, DialogProviderProps } from '../../types';
/**
 * Context for managing dialog state across the application
 */
export declare const DialogContext: React.Context<DialogContextType>;
/**
 * Provider component that manages dialog state and renders active dialogs
 */
export declare const DialogProvider: React.FC<DialogProviderProps>;

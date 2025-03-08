import React from 'react';
import type { DialogContextType, DialogProviderProps } from '../types';
declare const DialogContext: React.Context<DialogContextType | undefined>;
export declare function DialogProvider({ children }: DialogProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useDialog(): DialogContextType;
export { DialogContext };

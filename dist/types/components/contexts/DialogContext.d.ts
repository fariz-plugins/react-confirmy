import type { DialogContextType, DialogProviderProps } from '../../types';
/**
 * Context for managing dialog state and queue
 */
export declare const DialogContext: import("react").Context<DialogContextType | undefined>;
export declare function DialogProvider({ children }: DialogProviderProps): import("react/jsx-runtime").JSX.Element;

import * as react from 'react';
import { SVGProps, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type DialogType = 'info' | 'warning' | 'danger';
type DialogSize = 'sm' | 'md' | 'lg';
type DialogPosition = 'top' | 'center' | 'bottom';
type Framework = 'tailwind' | 'bootstrap' | 'none';
type DialogTransitionTiming = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
interface DialogAnimationConfig {
    type: 'fade' | 'scale' | 'slide' | 'none';
    duration: number;
    timing: DialogTransitionTiming;
    customKeyframes?: string;
}
interface DialogAsyncOptions {
    loadingText?: string;
    successText?: string;
    errorText?: string;
    showLoadingSpinner?: boolean;
}
interface DialogIconProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    color?: string;
}
interface DialogConfirmationProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void> | void;
    triggerRef: React.RefObject<HTMLElement>;
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    type?: DialogType;
    size?: DialogSize;
    position?: DialogPosition;
    framework?: Framework;
    styles?: Partial<DialogStyleConfig>;
    className?: string;
    darkMode?: boolean;
    customIcon?: React.ComponentType<DialogIconProps>;
    animation?: DialogAnimationConfig;
    zIndex?: number;
    formFields?: DialogFormField[];
    asyncOptions?: DialogAsyncOptions;
    stackOrder?: number;
}
interface DialogState {
    id: string;
    props: DialogConfirmationProps;
}
interface DialogContextType {
    dialogQueue: DialogState[];
    addDialog: (props: DialogConfirmationProps) => void;
    removeDialog: (id: string) => void;
    updateDialog: (id: string, props: Partial<DialogConfirmationProps>) => void;
}
interface DialogProviderProps {
    children: ReactNode;
}
interface DialogStyleConfig {
    container: string;
    arrow: string;
    closeButton: string;
    closeIcon: string;
    header: string;
    icon: string;
    title: string;
    message: string;
    form: string;
    formField: string;
    label: string;
    input: string;
    footer: string;
    cancelButton: string;
    confirmButton: {
        danger: string;
        warning: string;
        info: string;
    };
    'sizeSM': string;
    'sizeMD': string;
    'sizeLG': string;
    darkMode?: {
        container?: string;
        title?: string;
        message?: string;
        label?: string;
        input?: string;
        cancelButton?: string;
        confirmButton?: {
            danger: string;
            warning: string;
            info: string;
        };
    };
}
interface DialogFormField {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
}

/**
 * Context for managing dialog state and queue
 */
declare const DialogContext: react.Context<DialogContextType | undefined>;
declare function DialogProvider({ children }: DialogProviderProps): react_jsx_runtime.JSX.Element;

declare function Confirmy({ isOpen, onClose, onConfirm, triggerRef, title, message, confirmText, cancelText, type, size, position, framework, styles, className, darkMode, customIcon, zIndex, formFields, asyncOptions, stackOrder }: DialogConfirmationProps): react_jsx_runtime.JSX.Element | null;

/**
 * Hook for accessing dialog context functionality
 * Must be used within a DialogProvider component
 */
declare function useDialog(): DialogContextType;

interface UseConfirmyProps {
    onClose: () => void;
    onConfirm: () => Promise<void> | void;
    setIsLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    asyncOptions?: DialogAsyncOptions;
}
/**
 * Custom hook for managing Confirmy dialog state and functionality
 */
declare const useConfirmy: ({ onClose, onConfirm, setIsLoading, setError, asyncOptions }: UseConfirmyProps) => {
    handleClose: () => void;
    handleConfirm: () => Promise<void>;
};

declare const defaultStyles: Record<Framework, DialogStyleConfig>;

export { Confirmy, type DialogAnimationConfig, type DialogAsyncOptions, type DialogConfirmationProps, DialogContext, type DialogContextType, type DialogFormField, type DialogIconProps, type DialogPosition, DialogProvider, type DialogProviderProps, type DialogSize, type DialogState, type DialogStyleConfig, type DialogType, type Framework, defaultStyles, useConfirmy, useDialog };

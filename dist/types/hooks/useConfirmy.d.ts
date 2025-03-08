import type { ConfirmationDialogProps } from '../types';
interface FormData {
    [key: string]: string;
}
/**
 * Custom hook for managing Confirmy dialog state and functionality
 */
export declare const useConfirmy: (props: ConfirmationDialogProps) => {
    dialogRef: import("react").RefObject<HTMLDivElement>;
    arrowRef: import("react").RefObject<HTMLDivElement>;
    firstFocusableRef: import("react").RefObject<HTMLButtonElement>;
    formData: FormData;
    isLoading: boolean;
    status: string | null;
    handleFormChange: (name: string, value: string) => void;
    handleConfirm: () => Promise<void>;
};
export {};

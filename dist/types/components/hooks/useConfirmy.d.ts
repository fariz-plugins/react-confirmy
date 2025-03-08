import type { DialogAsyncOptions } from '../../types';
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
export declare const useConfirmy: ({ onClose, onConfirm, setIsLoading, setError, asyncOptions }: UseConfirmyProps) => {
    handleClose: () => void;
    handleConfirm: () => Promise<void>;
};
export {};

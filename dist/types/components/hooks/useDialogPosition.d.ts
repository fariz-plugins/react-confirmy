import type { DialogPosition } from '../../types';
interface UseDialogPositionProps {
    isOpen: boolean;
    triggerRef?: React.RefObject<HTMLElement>;
    position: DialogPosition;
}
export declare const useDialogPosition: ({ isOpen, triggerRef, position }: UseDialogPositionProps) => {
    dialogRef: import("react").RefObject<HTMLDivElement>;
    arrowRef: import("react").RefObject<HTMLDivElement>;
    getPositionClasses: () => "" | "fixed top-4 left-1/2 transform -translate-x-1/2" | "fixed bottom-4 left-1/2 transform -translate-x-1/2" | "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
};
export {};

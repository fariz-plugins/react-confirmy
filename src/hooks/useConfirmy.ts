import { useRef, useState } from 'react';
import type { ConfirmationDialogProps } from '../types';

interface FormData {
  [key: string]: string;
}

/**
 * Custom hook for managing Confirmy dialog state and functionality
 */
export const useConfirmy = (props: ConfirmationDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleFormChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirm = async () => {
    if (props.onConfirm) {
      setIsLoading(true);
      try {
        await props.onConfirm();
        setStatus('Success');
      } catch {
        setStatus('Error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    dialogRef,
    arrowRef,
    firstFocusableRef,
    formData,
    isLoading,
    status,
    handleFormChange,
    handleConfirm,
  };
};

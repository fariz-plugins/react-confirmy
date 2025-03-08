import { useEffect, useRef } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import type { DialogPosition } from '../../types';

interface UseDialogPositionProps {
  isOpen: boolean;
  triggerRef?: React.RefObject<HTMLElement>;
  position: DialogPosition;
}

export const useDialogPosition = ({ isOpen, triggerRef, position }: UseDialogPositionProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<Instance | null>(null);

  useEffect(() => {
    // Only set up popper if we have a trigger element
    if (isOpen && triggerRef?.current && dialogRef.current) {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
      }

      popperInstanceRef.current = createPopper(triggerRef.current, dialogRef.current, {
        placement: position === 'top' ? 'top' : position === 'bottom' ? 'bottom' : 'auto',
        modifiers: [
          {
            name: 'arrow',
            options: {
              element: arrowRef.current,
              padding: 8
            }
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8]
            }
          },
          {
            name: 'preventOverflow',
            options: {
              padding: 8,
              boundariesElement: 'viewport'
            }
          },
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'bottom', 'left', 'right']
            }
          }
        ]
      });

      return () => {
        if (popperInstanceRef.current) {
          popperInstanceRef.current.destroy();
          popperInstanceRef.current = null;
        }
      };
    }
  }, [isOpen, position, triggerRef]);

  const getPositionClasses = () => {
    // If no trigger element, use fixed positioning
    if (!triggerRef) {
      switch (position) {
        case 'top':
          return 'fixed top-4 left-1/2 transform -translate-x-1/2';
        case 'bottom':
          return 'fixed bottom-4 left-1/2 transform -translate-x-1/2';
        default:
          return 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      }
    }
    return ''; // When using Popper.js, it will handle positioning
  };

  return {
    dialogRef,
    arrowRef,
    getPositionClasses
  };
};

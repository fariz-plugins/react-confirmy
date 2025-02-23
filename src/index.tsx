import React, { useEffect, useRef } from "react";
import { createPopper, Instance } from "@popperjs/core";
import { X, AlertCircle } from "lucide-react";

type Framework = "tailwind" | "bootstrap" | "none";
type DialogType = "danger" | "warning" | "info";

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  type?: DialogType;
  triggerRef: React.RefObject<HTMLElement>;
  framework?: Framework;
  styles?: Partial<StyleConfig>;
  className?: string;
}

interface StyleConfig {
  container: string;
  arrow: string;
  closeButton: string;
  closeIcon: string;
  header: string;
  icon: string;
  title: string;
  message: string;
  footer: string;
  cancelButton: string;
  confirmButton: {
    danger: string;
    warning: string;
    info: string;
  };
}

const defaultStyles: Record<Framework, StyleConfig> = {
  tailwind: {
    container:
      "z-50 bg-white rounded-lg shadow-xl w-[320px] p-4 border border-gray-200",
    arrow: "absolute w-2 h-2",
    closeButton: "absolute right-2 top-2 text-gray-400 hover:text-gray-500",
    closeIcon: "w-4 h-4",
    header: "flex items-center gap-2 mb-3",
    icon: "w-5 h-5",
    title: "text-base font-semibold text-gray-900",
    message: "text-sm text-gray-600 mb-4",
    footer: "flex justify-end gap-2",
    cancelButton:
      "px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md",
    confirmButton: {
      danger:
        "px-3 py-1.5 text-xs font-medium text-white rounded-md bg-red-600 hover:bg-red-700",
      warning:
        "px-3 py-1.5 text-xs font-medium text-white rounded-md bg-yellow-600 hover:bg-yellow-700",
      info: "px-3 py-1.5 text-xs font-medium text-white rounded-md bg-blue-600 hover:bg-blue-700",
    },
  },
  bootstrap: {
    container: "popover bs-popover-auto bg-white rounded shadow-lg p-3 border",
    arrow: "popover-arrow position-absolute",
    closeButton: "btn-close position-absolute top-0 end-0 p-2",
    closeIcon: "d-none",
    header: "d-flex align-items-center gap-2 mb-2",
    icon: "",
    title: "h6 mb-0",
    message: "small text-body-secondary mb-3",
    footer: "d-flex justify-content-end gap-2",
    cancelButton: "btn btn-sm btn-light",
    confirmButton: {
      danger: "btn btn-sm btn-danger",
      warning: "btn btn-sm btn-warning",
      info: "btn btn-sm btn-primary",
    },
  },
  none: {
    container: "",
    arrow: "",
    closeButton: "",
    closeIcon: "",
    header: "",
    icon: "",
    title: "",
    message: "",
    footer: "",
    cancelButton: "",
    confirmButton: {
      danger: "",
      warning: "",
      info: "",
    },
  },
};

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "warning",
  triggerRef,
  framework = "tailwind",
  styles = {},
  className = "",
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<Instance | null>(null);

  const mergedStyles: StyleConfig = {
    ...defaultStyles[framework],
    ...styles,
  };

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !dialogRef.current) return;

    popperInstanceRef.current = createPopper(
      triggerRef.current,
      dialogRef.current,
      {
        placement: "top",
        modifiers: [
          {
            name: "offset",
            options: { offset: [0, 8] },
          },
          {
            name: "arrow",
            options: {
              element: arrowRef.current,
              padding: 5,
            },
          },
          {
            name: "preventOverflow",
            options: {
              padding: 8,
              altAxis: true,
            },
          },
          {
            name: "flip",
            options: {
              fallbackPlacements: ["bottom", "right", "left"],
            },
          },
        ],
      }
    );

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, [message]);

  if (!isOpen) return null;

  const getIconColor = (
    type: "danger" | "warning" | "info",
    framework: Framework
  ): string => {
    if (framework === "tailwind") {
      if (type === "danger") return "text-red-500";
      if (type === "warning") return "text-yellow-500";
      return "text-blue-500"; // default to 'info' case
    }
    return ""; // Add any fallback if needed for other frameworks
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div
      ref={dialogRef}
      className={`${mergedStyles.container} ${className}`}
      style={{ position: "absolute" }}
    >
      <div ref={arrowRef} className={mergedStyles.arrow} data-popper-arrow />

      <button
        onClick={onClose}
        className={mergedStyles.closeButton}
        aria-label="Close"
      >
        <X className={mergedStyles.closeIcon} />
      </button>

      <div className={mergedStyles.header}>
        <AlertCircle className={`${mergedStyles.icon} ${getIconColor()}`} />
        <h3 className={mergedStyles.title}>{title}</h3>
      </div>

      <p className={mergedStyles.message}>{message}</p>

      <div className={mergedStyles.footer}>
        <button onClick={onClose} className={mergedStyles.cancelButton}>
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className={mergedStyles.confirmButton[type]}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

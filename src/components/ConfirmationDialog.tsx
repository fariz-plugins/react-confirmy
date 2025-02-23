import React, { useEffect, useRef } from "react";
import { createPopper, Instance } from "@popperjs/core";
import { X, AlertCircle } from "lucide-react";
import { ConfirmationDialogProps } from "./types";
import { defaultStyles } from "./styles";

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

  const mergedStyles = {
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
    framework: "tailwind" | "bootstrap" | "none"
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
        <AlertCircle
          className={`${mergedStyles.icon} ${getIconColor(type, framework)}`}
        />
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

import { Framework, StyleConfig } from "./types";

export const defaultStyles: Record<Framework, StyleConfig> = {
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

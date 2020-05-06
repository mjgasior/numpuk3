import { useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

export const useVisibilityDialog = () => {
  const { isOpen, open, close } = useDialog();
  return {
    isVisibilityDialogOpen: isOpen,
    openVisibilityDialog: open,
    closeVisibilityDialog: close,
  };
};

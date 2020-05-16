import { useDialog } from "../../+hooks/useDialog";

export const useVisibilityDialog = () => {
  const controls = useDialog("Visibility");
  return controls;
};

export const useExportDialog = () => {
  const controls = useDialog("Export");
  return controls;
};

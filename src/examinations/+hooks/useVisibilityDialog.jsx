import { useDialog } from "../../+hooks/useDialog";

export const useVisibilityDialog = () => {
  const controls = useDialog("Visibility");
  return controls;
};

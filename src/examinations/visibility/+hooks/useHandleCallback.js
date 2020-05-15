import { useCallback } from "react";

export const useHandleCallback = (callback) => {
  return useCallback(
    (name, value) => {
      callback((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [callback]
  );
};

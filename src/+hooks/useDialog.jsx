import { useState } from "react";

export const useDialog = (name) => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    [`is${name}DialogOpen`]: isOpen,
    [`open${name}Dialog`]: () => setIsOpen(true),
    [`close${name}Dialog`]: () => setIsOpen(false),
  };
};

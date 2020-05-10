import { useState } from "react";

export const useAbabab = () => {
  const [aaa, setAaa] = useState(0);
  const [bbb, setBbb] = useState(5);

  return { aaa, bbb, setAaa, setBbb };
};

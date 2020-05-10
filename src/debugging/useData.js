import { useState, useEffect } from "react";
import { getData } from "./getData";

export const useData = (ababab) => {
  const [data, setData] = useState("start");

  useEffect(() => {
    const loadData = async () => {
      const newData = await getData(ababab);
      setData(newData);
    };
    console.log(Date.now().toString());
    loadData();
  }, [ababab]);

  return data;
};

export const getData = ({ aaa, bbb }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🤡" + aaa + bbb);
    }, 2000);
  });
};

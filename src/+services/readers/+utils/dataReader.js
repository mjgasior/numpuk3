export const setValue = (valueCell, exponentCell) => {
  const textValue = valueCell.text;
  if (textValue === "0" || textValue.toLowerCase() === "o") {
    return 0;
  }

  const noWhitespaceString = valueCell.text.replace(/ /g, "");
  const baseOfExponent = noWhitespaceString.split("x")[0].replace(/,/g, ".");
  return parseFloat(`${baseOfExponent}e${exponentCell.value}`);
};

import { moment } from "../../../+apis/dependenciesApi";

export function isPeselValid(pesel) {
  if (pesel == null) {
    return false;
  }

  let toReturn = false;
  try {
    if (pesel.length !== 11) {
      return false;
    }
    const peselNumbers = getPeselNumbers(pesel);
    toReturn = countCheckSum(peselNumbers) === peselNumbers[10];

    if (toReturn) {
      getBirthdateFromPesel(pesel);
    }
  } catch (Exception) {
    toReturn = false;
  }
  return toReturn;
}

export function getBirthdateFromPesel(pesel) {
  const peselNumbers = getPeselNumbers(pesel);
  const date = new Date(
    getBirthYear(peselNumbers),
    getBirthMonth(peselNumbers),
    getBirthDay(peselNumbers)
  );
  return moment(date).format("DD.MM.YYYY");
}

const MULTIPLIERS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

function isEven(value) {
  return value % 2 === 0;
}

function getBirthDay(peselNumbers) {
  return peselNumbers[4] * 10 + peselNumbers[5];
}

function getBirthMonth(peselNumbers) {
  return isEven(peselNumbers[2]) ? peselNumbers[3] : peselNumbers[3] + 10;
}

const CENTURIES = {
  0: 1900,
  1: 1900,
  2: 2000,
  3: 2000,
  4: 2100,
  5: 2100,
  6: 2200,
  7: 2200,
  8: 1800,
  9: 1800,
};

function getBirthYear(peselNumbers) {
  const century = CENTURIES[peselNumbers[2]];
  let birthYear = century + peselNumbers[0] * 10 + peselNumbers[1];
  return birthYear;
}

function countCheckSum(peselNumbers) {
  let sum = 0;
  for (let i = 0; i < MULTIPLIERS.length; i++) {
    sum += MULTIPLIERS[i] * peselNumbers[i];
  }

  const moduloResult = sum % 10;
  return moduloResult === 0 ? moduloResult : 10 - moduloResult;
}

function getPeselNumbers(peselString) {
  const peselLength = 11;
  const characters = peselString.split("");
  const digits = [];
  for (let i = 0; i < peselLength; i++) {
    digits.push(parseInt(characters[i]));
  }
  return digits;
}

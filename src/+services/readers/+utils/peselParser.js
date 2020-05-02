export function IsValid(pesel) {
  if (pesel == null) {
    return false;
  }

  let toReturn = false;
  try {
    if (pesel.length !== 11) {
      return false;
    }
    const peselNumbers = GetPeselNumbers(pesel);
    toReturn = CountCheckSum(peselNumbers) === peselNumbers[10];

    if (toReturn) {
      GetBirthday(pesel);
    }
  } catch (Exception) {
    toReturn = false;
  }
  return toReturn;
}

export function GetBirthday(pesel) {
  const peselNumbers = GetPeselNumbers(pesel);
  return new Date(
    GetBirthYear(peselNumbers),
    GetBirthMonth(peselNumbers),
    GetBirthDay(peselNumbers)
  );
}

const MULTIPLIERS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

function IsEven(value) {
  return value % 2 == 0;
}

function GetBirthDay(peselNumbers) {
  return peselNumbers[4] * 10 + peselNumbers[5];
}

function GetBirthMonth(peselNumbers) {
  return IsEven(peselNumbers[2]) ? peselNumbers[3] : peselNumbers[3] + 10;
}

function GetBirthYear(peselNumbers) {
  let birthYear = 1900 + peselNumbers[0] * 10 + peselNumbers[1];
  if (peselNumbers[2] >= 2 && peselNumbers[2] < 8) {
    birthYear += (peselNumbers[2] / 2) * 100;
  }

  if (peselNumbers[2] >= 8) {
    birthYear -= 100;
  }
  return birthYear;
}

function CountCheckSum(peselNumbers) {
  let sum = 0;
  for (let i = 0; i < MULTIPLIERS.length; i++) {
    sum += MULTIPLIERS[i] * peselNumbers[i];
  }

  const moduloResult = sum % 10;
  return moduloResult == 0 ? moduloResult : 10 - moduloResult;
}

function GetPeselNumbers(peselString) {
  const peselLength = 11;
  const characters = peselString.split("");
  const digits = [];
  for (let i = 0; i < peselLength; i++) {
    digits.push(parseInt(characters[i]));
  }
  return digits;
}

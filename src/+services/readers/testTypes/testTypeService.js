import { ALL_TEST_TYPES } from "./testTypes";
import { logger } from "./../../logger";

const testsSet = new Set(ALL_TEST_TYPES);

const COMMON_MISTAKES = {
  "clostridium innocum": "Clostridium innocuum",
  "clostridium inoccum": "Clostridium innocuum",

  "colinsella spp.": "Collinsella spp.",

  "enterobacter cloaceae": "Enterobacter cloacae",
  "egerthella lenta": "Eggerthella lenta",
  "morganellaspp.": "Morganella spp.",
  "streptococcus sp..": "Streptococcus spp.",

  "staphyloccocus spp.": "Staphylococcus spp.",
  "straphylococcus spp.": "Staphylococcus spp.",
  "staphylococcus aures": "Staphylococcus aureus",
  "staphylococcus areus": "Staphylococcus aureus",
  "straphylococcus aureus": "Staphylococcus aureus",
};

export const hasTest = (testName) => {
  return testsSet.has(testName);
};

export const tryFixTestName = (testName) => {
  const newName = ALL_TEST_TYPES.find((testType) =>
    testType.toLowerCase().includes(testName.toLowerCase())
  );

  if (newName) {
    logger.warn(`${testName} fixed to ${newName}`);
    return newName;
  } else {
    logger.warn(`Trying to find ${testName} in common mistakes`);
    const fixedName = COMMON_MISTAKES[testName.toLowerCase()];

    if (fixedName) {
      logger.warn(`${testName} fixed to ${fixedName}`);
      return fixedName;
    }

    logger.error(`${testName} impossible to fix`);
    return testName;
  }
};

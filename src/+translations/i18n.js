import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { english } from "./en";
import { polish } from "./pl";

const resources = {
  ...english,
  ...polish,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

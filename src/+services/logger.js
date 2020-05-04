import { log } from "../+apis/dependenciesApi";

const currentLogKeys = [];

const warn = (message) => {
  currentLogKeys.push(message);
  log.warn(message);
};

const error = (message) => {
  currentLogKeys.push(message);
  log.error(message);
};

const info = (message) => {
  currentLogKeys.push(message);
  log.info(message);
};

const getLogs = () => currentLogKeys;

export const logger = {
  warn,
  error,
  info,
  getLogs,
};

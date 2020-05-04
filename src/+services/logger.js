import { log } from "../+apis/dependenciesApi";

export const logger = {
  warn: log.warn,
  error: log.error,
  info: log.info,
};

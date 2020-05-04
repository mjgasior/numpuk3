import { log } from "../+apis/dependenciesApi";
import { path, fs, shell } from "../+apis/nodeApi";

const ERROR_LEVEL = {
  WARN: "WARN",
  ERROR: "ERROR",
  INFO: "INFO",
};

const currentLogKeys = [];

const warn = (message) => {
  currentLogKeys.push({ message, level: ERROR_LEVEL.WARN });
  log.warn(message);
};

const error = (message) => {
  currentLogKeys.push({ message, level: ERROR_LEVEL.ERROR });
  log.error(message);
};

const info = (message) => {
  currentLogKeys.push({ message, level: ERROR_LEVEL.INFO });
  log.info(message);
};

const getLogs = () => currentLogKeys;

const deleteLogs = () => {
  const filepath = getLogFilepath();
  const directory = path.dirname(filepath);
  fs.readdir(directory, (err, files) => {
    if (err) {
      throw err;
    }

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};

const getLogFilepath = () => log.transports.file.getFile().path;

const openLogDirectory = () => shell.openItem(path.dirname(getLogFilepath()));

export const logger = {
  getLogFilepath,
  openLogDirectory,
  deleteLogs,
  warn,
  error,
  info,
  getLogs,
};

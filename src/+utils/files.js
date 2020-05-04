import { fs, path } from "./../+apis/nodeApi";
import { logger } from "../+services/logger";

export const getFilesInDirectory = async (directoryPath, extension) => {
  const fileList = await readDirectoryAsync(directoryPath, extension);
  return fileList;
};

const readDirectoryAsync = (directoryPath, extension) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        logger.error(err);
        reject(err);
      }

      if (extension) {
        const filteredFiles = files.filter((file) => {
          return path.extname(file).toLowerCase() === extension;
        });
        resolve(filteredFiles);
      }
      resolve(files);
    });
  });
};

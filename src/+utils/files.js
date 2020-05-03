import { fs, path } from "./../+apis/nodeApi";
import { log } from "../+apis/dependenciesApi";

const readDirectoryAsync = (directoryPath, extension) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        log.error(err);
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

export const getFilesInDirectory = async (directoryPath, extension) => {
  const fileList = await readDirectoryAsync(directoryPath, extension);
  return fileList;
};

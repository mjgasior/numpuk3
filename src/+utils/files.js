import { fs, path } from "./electron";

export const getFilesInDirectory = (directoryPath, extension) => {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    if (extension) {
      const filesList = files.filter(function (e) {
        return path.extname(e).toLowerCase() === extension;
      });
      console.log(filesList);
      if (filesList.length < files.length) {
        console.log("filesList < files");
      }
    } else {
      files.forEach(function (file) {
        console.log(file);
      });
    }
  });
};

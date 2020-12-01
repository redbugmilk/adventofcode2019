const file = require("fs");

const readFile = async (path) => {
  try {
    console.log("File " + path);
    if (path && typeof path === "string") {
      return file.promises.readFile(path, "utf8");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.readFile = readFile;

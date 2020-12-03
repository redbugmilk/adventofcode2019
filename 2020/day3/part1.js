const { readFile } = require("../utils/file");
const { convertStringToArray } = require("../utils/arrays");

const convertLine = (line, xPosition) => {
  if (xPosition < line.length) {
    return line;
  }
  convertLine(`${line}${pattern}`, pattern, xPosition);
};
const checkIfIsTree = (line, xPosition) => {
  const nextPosition = xPosition + 1;
  const lineMap = convertLine(line, line, nextPosition);
  console.log(lineMap);
  return lineMap[nextPosition] === "#";
};
const findTheTrees = (lines) => {
  let trees = 0;
  let initialX = 0;
  return lines.forEach((element, index) => {
    if (initialX !== 0) {
      console.log(element.length);
      if (checkIfIsTree(element, initialX)) {
        trees++;
      }
    }
    initialX = initialX + 3;
  });
};

const numberOfTrees = (map) => {
  const lines = convertStringToArray(map);
  const trees = findTheTrees(lines);

  return trees && wrongPasswords.filter(Boolean).length;
};

const countingTrees = async () => {
  try {
    console.log("How many trees I will find?");
    const map = await readFile("./map");
    if (map) {
      const result = numberOfTrees(map);
      console.log("Has this many trees " + result);
    }
    console.log("Doesn't trees");
  } catch (error) {
    console.log("OhOh something is wrong! Error: ", error);
  }
};

countingTrees();

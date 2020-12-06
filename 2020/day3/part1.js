const { readFile } = require("../utils/file");
const { convertStringToArray } = require("../utils/arrays");

const calculatePosition = (xPosition, lineLength) => {
  const factor = Math.trunc(xPosition / lineLength);
  return xPosition - lineLength * factor;
};

const checkIfIsTree = (line, xPosition) => {
  const nextPosition = xPosition;
  const position = calculatePosition(nextPosition, line.length);
  return line[position] === "#";
};

const findTheTrees = (lines) => {
  let trees = 0;
  let initialX = 0;
  lines.forEach((element) => {
    if (initialX !== 0) {
      if (checkIfIsTree(element, initialX)) {
        trees++;
      }
    }
    initialX = initialX + 3;
  });
  return trees;
};

const numberOfTrees = (map) => {
  const lines = convertStringToArray(map);
  const trees = findTheTrees(lines);

  return trees;
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

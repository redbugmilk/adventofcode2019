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

const findTheTrees = (lines, x, y) => {
  let trees = 0;
  let initialX = 0;
  lines.forEach((element, index) => {
    if (index % y === 0) {
      if (initialX !== 0) {
        if (checkIfIsTree(element, initialX)) {
          trees++;
        }
      }
      initialX = initialX + x;
    }
  });
  return trees;
};

const numberOfTrees = (map, x, y) => {
  const lines = convertStringToArray(map,"\n");
  const trees = findTheTrees(lines, x, y);
  return trees;
};

const countingTrees = async () => {
  try {
    console.log("How many trees I will find?");
    const map = await readFile("./map");
    if (map) {
      const slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ];
      const result = slopes.reduce((accumulator, currentValue) => {
        const trees = numberOfTrees(map, currentValue[0], currentValue[1]);
        return accumulator * trees;
      }, 1);

      console.log("Has this many trees " + result);
    }
    console.log("Doesn't trees");
  } catch (error) {
    console.log("OhOh something is wrong! Error: ", error);
  }
};

countingTrees();

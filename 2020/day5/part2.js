const { readFile } = require("../utils/file");
const { convertStringToArray } = require("../utils/arrays");

const seatsCalculation = (positions, instructions, pattern) => {
  const listOfInstructions = instructions.split("");
  listOfInstructions.forEach((instruction) => {
    const diff = Math.trunc((positions[1] - positions[0]) / 2);
    if (instruction === pattern[0]) {
      positions[1] = diff + positions[0];
    }
    if (instruction === pattern[1]) {
      positions[0] = positions[1] - diff;
    }
    // console.log(`start:${positions[0]} end:${positions[1]}`)
  });
  return positions;
};

const findRow = (instructions) => {
  const positions = [0, 127];
  seatsCalculation(positions, instructions, ["F", "B"]);
  var lastInstruction = instructions.split("").pop();
  return lastInstruction === "F" ? positions[0] : positions[1];
};

const findColumn = (instructions) => {
  const positions = [0, 7];
  seatsCalculation(positions, instructions, ["L", "R"]);
  var lastInstruction = instructions.split("").pop();
  return lastInstruction === "L" ? positions[0] : positions[1];
};

const calculateSeatId = (seat) => {
  const row = findRow(seat.substring(0, 6));
  const column = findColumn(seat.substring(7));
  const id = (row-1) * 8 + column;
  return { row: row - 1, column, id };
};

const seatWithHighestId = (seats) => {
  const orderSeats = {}
  const result = seats.map((seat) => {
    const { row, column, id } = calculateSeatId(seat);
    console.log(`row: ${row} column: ${column} id: ${id}`)
  });
};

const findSeatWithHighestId = (seats) => {
  const seatsList = convertStringToArray(seats);
  const validPassports = seatWithHighestId(seatsList);
  return validPassports;
};

const findingSeat = async () => {
  try {
    console.log("What is my seat?");
    const seats = await readFile("./seats");
    if (seats) {
      const result = findSeatWithHighestId(seats);
      console.log("Seat with highest id " + result);
      return result;
    }
    console.log("Doesn't have seats");
  } catch (error) {
    console.log("OhOh something is wrong! Error: ", error);
  }
};

findingSeat();

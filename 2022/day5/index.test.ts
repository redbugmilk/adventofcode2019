import { describe, expect, it, beforeEach } from "vitest";
import {
  uniqueMovement,
  allMovements,
  parseResult,
  completeMovement,
  allMovements2,
} from ".";

// const stack = [["Z", "N"], ["M", "C", "D"], ["P"]];
const movements = [
  [1, 2, 1],
  [3, 1, 3],
  [2, 2, 1],
  [1, 1, 2],
];

describe("Movements", () => {
  let stack = [];
  beforeEach(async () => {
    stack = [["Z", "N"], ["M", "C", "D"], ["P"]];
  });
  it("should move D from 2 to 1 if [1, 2, 1]", () => {
    uniqueMovement(stack, 1, 2, 1);
    expect(stack[0].join("")).toBe("ZND");
  });
  it("should end up with CMZ when finish all movements", () => {
    allMovements(stack, movements);
    expect(
      `${stack[0][stack[0].length - 1]}${stack[1][stack[1].length - 1]}${
        stack[2][stack[2].length - 1]
      }`
    ).toBe("CMZ");
  });
  it("should parsed end result when finish all movements", () => {
    const result = parseResult(allMovements(stack, movements));
    expect(result).toBe("CMZ");
  });
});

describe("Different movements", () => {
  let stack = [];
  beforeEach(async () => {
    stack = [["Z", "N"], ["M", "C", "D"], ["P"]];
  });
  it("should move D from 2 to 1 if [1, 2, 1]", () => {
    completeMovement(stack, 1, 2, 1);
    expect(stack[0].join("")).toBe("ZND");
  });
  it("should move D from 2 to 1 if [1, 2, 1]", () => {
    completeMovement(stack, 1, 2, 1);
    expect(stack[0].join("")).toBe("ZND");
    completeMovement(stack, 3, 1, 3);
    expect(stack[2].join("")).toBe("PZND");
  });
  it("should move D from 2 to 1 if [1, 2, 1]", () => {
    completeMovement(stack, 1, 2, 1);
    expect(stack[0].join("")).toBe("ZND");
    completeMovement(stack, 3, 1, 3);
    expect(stack[2].join("")).toBe("PZND");
    completeMovement(stack, 2, 2, 1);
    expect(stack[0].join("")).toBe("MC");
  });
  it("should end up with MCD when finish all movements", () => {
    allMovements2(stack, movements);
    expect(parseResult(stack)).toBe("MCD");
    console.log(stack);
  });
});

import { describe, expect, it } from "vitest";
import {
  parseInput,
  isInSection,
  totalInSectionPairs,
  totalOverlapPairs,
  overlaps,
} from ".";

describe("Parsed input", () => {
  const input = "2-4,6-8;2-3,4-5";
  it("should return two array when receives this input 2-4,6-8;2-3,4-5", () => {
    const result = parseInput(input);
    expect(result.length).toBe(2);
  });
  it("should return two array with length 2 when receives this input 2-4,6-8;2-3,4-5", () => {
    const result = parseInput(input);
    expect(result[0].length).toBe(2);
    expect(result[1].length).toBe(2);
  });
  it("should return two array with numbers when receives this input 2-4,6-8;2-3,4-5", () => {
    const result = parseInput(input);
    expect(result[0][0][0]).toBe(2);
    expect(result[0][0][1]).toBe(4);
    expect(result[0][1][0]).toBe(6);
    expect(result[0][1][1]).toBe(8);
  });
});

describe("Is In Section", () => {
  it("should return true if first is in section then the second", () => {
    const result = isInSection([3, 4], [2, 6]);
    expect(result).toBeTruthy();
  });
  it("should return true if second is in section then the first", () => {
    const result = isInSection([2, 6], [3, 4]);
    expect(result).toBeTruthy();
  });
  it("should return false if first is out from section second", () => {
    const result = isInSection([2, 4], [6, 8]);
    expect(result).toBeFalsy();
  });
  it("should return false if second is out from section first", () => {
    const result = isInSection([6, 8], [2, 4]);
    expect(result).toBeFalsy();
  });
});

describe("Overlap", () => {
  it("should return false if 2-4,6-8", () => {
    const result = overlaps([2, 4], [6, 8]);
    expect(result).toBeFalsy();
  });
  it("should return false 2-3,4-5", () => {
    const result = overlaps([2, 3], [4, 5]);
    expect(result).toBeFalsy();
  });
  it("should return true 5-7,7-9", () => {
    const result = overlaps([5, 7], [7, 9]);
    expect(result).toBeTruthy();
  });
  it("should return true if 2-8,3-7", () => {
    const result = overlaps([2, 8], [3, 7]);
    expect(result).toBeTruthy();
  });
  it("should return true if 6-6,4-6", () => {
    const result = overlaps([6, 6], [4, 6]);
    expect(result).toBeTruthy();
  });
  it("should return true if 2-6,4-8", () => {
    const result = overlaps([2, 6], [4, 8]);
    expect(result).toBeTruthy();
  });
  it("should return true if 4-8,2-6", () => {
    const result = overlaps([4, 8], [2, 6]);
    expect(result).toBeTruthy();
  });
});

import { describe, expect, it } from "vitest";
import { calculatePriority, detectCommonItem, divideIntoGroupRucksacks, findCommonItem } from ".";

describe('detect common item', () => { 
    it('should return a char p when receiving vJrwpWtwJgWrhcsFMMfFFhFp', () => {
        const result = detectCommonItem("vJrwpWtwJgWrhcsFMMfFFhFp");
        expect(result).toBe('p');
    });
    it('should return a char L when receiving jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', () => {
        const result = detectCommonItem("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL");
        expect(result).toBe('L');
    });
    it('should return a char P when receiving PmmdzqPrVvPwwTWBwg', () => {
        const result = detectCommonItem("PmmdzqPrVvPwwTWBwg");
        expect(result).toBe('P');
    });
    it('should return a char v when receiving wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', () => {
        const result = detectCommonItem("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn");
        expect(result).toBe('v');
    });
    it('should return a char t when receiving ttgJtRGJQctTZtZT', () => {
        const result = detectCommonItem("ttgJtRGJQctTZtZT");
        expect(result).toBe('t');
    });
    it('should return a char s when receiving CrZsJsPPZsGzwwsLwLmpwMDw', () => {
        const result = detectCommonItem("CrZsJsPPZsGzwwsLwLmpwMDw");
        expect(result).toBe('s');
    });
 })

describe('calculate priority', () => { 
    it('should return 16 if receive p', () => {
        const result = calculatePriority('p');
        expect(result).toBe(16)
    });
    it('should return 38 if receive L', () => {
        const result = calculatePriority('L');
        expect(result).toBe(38)
    });
    it('should return 42 if receive P', () => {
        const result = calculatePriority('P');
        expect(result).toBe(42)
    });
    it('should return 22 if receive v', () => {
        const result = calculatePriority('v');
        expect(result).toBe(22)
    });
    it('should return 20 if receive t', () => {
        const result = calculatePriority('t');
        expect(result).toBe(20)
    });
    it('should return 19 if receive s', () => {
        const result = calculatePriority('s');
        expect(result).toBe(19)
    });
});

describe('Parsed input', () => { 
    it('should return arrays of 3', () => {
        const input = "vJrwpWtwJgWrhcsFMMfFFhFp,jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL,PmmdzqPrVvPwwTWBwg,wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn,ttgJtRGJQctTZtZT,CrZsJsPPZsGzwwsLwLmpwMDw";
        const result = divideIntoGroupRucksacks(input);
        expect(result).toHaveLength(2);
        expect(result[0]).toHaveLength(3);
    });
});

describe('Find common item on group rucksacks', () => { 
    it('should return  r for [vJrwpWtwJgWrhcsFMMfFFhFp,jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL,PmmdzqPrVvPwwTWBwg]', () => {
        const result = findCommonItem(['vJrwpWtwJgWrhcsFMMfFFhFp','jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL','PmmdzqPrVvPwwTWBwg']);
        expect(result).toBe('r');
    });
    it('should return  r for [wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn,ttgJtRGJQctTZtZT,CrZsJsPPZsGzwwsLwLmpwMDw]', () => {
        const result = findCommonItem(['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn','ttgJtRGJQctTZtZT','CrZsJsPPZsGzwwsLwLmpwMDw']);
        expect(result).toBe('Z');
    });
});
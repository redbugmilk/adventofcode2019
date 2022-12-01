import { describe, expect, it } from 'vitest';
import { maxTotalCalories, topThreeMaxCalories } from './index.ts';

describe('Max total calories', () => {
    const input = "1,2,3-2";
    it('should return a number', () => {
        const value = maxTotalCalories("");
        expect(value).not.toBeNaN();
        expect(value).toBe(0);
    }); 
    it('should return the sum of values from the first Elf received on the input', () => {
        const value = maxTotalCalories(input);
        expect(value).toBe(6);
    });
    it('should return Max value from the sum of calories received on the input', () => {
        const value = maxTotalCalories("1,2,3-20,10");
        expect(value).toBe(30);
    });
});

describe('Top Max calories', () => {
    it('should return a number', () => {
        const value = topThreeMaxCalories("");
        expect(value).not.toBeNaN();
        expect(value).toBe(0);
    }); 
    it('should return the sum of calories', () => {
        const value = topThreeMaxCalories("1,2,3-2");
        expect(value).toBe(8);
    });
    it('should return the sum of the top 3 max calories', () => {
        const value = topThreeMaxCalories("1,2,3-2,1-5-4");
        expect(value).toBe(15);
    });
});
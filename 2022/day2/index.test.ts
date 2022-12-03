import { describe, expect, it } from "vitest";
import { totalScoreCalculation, scoreChoice, scoreResult, defineResultBattle, totalScoreCalculationWithNewStrategy } from ".";

describe('Total score for the strategy', () => {
    it('should return a number', () => {
        const result = totalScoreCalculation("");
        expect(result).not.toBeNaN();
        expect(result).toBe(0);
    });

    it('should return 8 if A Y', () => {
        const result = totalScoreCalculation("A Y");
        expect(result).toBe(8);
    });

    it('should return 1 if B X', () => {
        const result = totalScoreCalculation("B X");
        expect(result).toBe(1);
    });

    it('should return 6 if C Z', () => {
        const result = totalScoreCalculation("C Z");
        expect(result).toBe(6);
    });

    it('should return 15 if A Y,B X,C Z', () => {
        const result = totalScoreCalculation("A Y,B X,C Z");
        expect(result).toBe(15);
    });

    describe('Score my choice', () => {
        it('should return 1 if X', () => {
            const result = scoreChoice("X");
            expect(result).toBe(1);
        });
        it('should return 2 if Y', () => {
            const result = scoreChoice("Y");
            expect(result).toBe(2);
        });
        it('should return 3 if Z', () => {
            const result = scoreChoice("Z");
            expect(result).toBe(3);
        });
    });
    describe('Score result', () => {
        it('should return 0 if lost', () => {
            const result = scoreResult("L");
            expect(result).toBe(0);
        });
        it('should return 2 if Y', () => {
            const result = scoreResult("D");
            expect(result).toBe(3);
        });
        it('should return 3 if Z', () => {
            const result = scoreResult("W");
            expect(result).toBe(6);
        });
    });
    describe('Define battle result', () => {
        it('should draw if input AX', () => {
            const result = defineResultBattle("AX");
            expect(result).toBe('D');
        });
        it('should draw if input BY', () => {
            const result = defineResultBattle("BY");
            expect(result).toBe('D');
        });
        it('should draw if input CZ', () => {
            const result = defineResultBattle("CZ");
            expect(result).toBe('D');
        });
        it('should win if input CX', () => {
            const result = defineResultBattle("CX");
            expect(result).toBe('W');
        });
        it('should win if input BZ', () => {
            const result = defineResultBattle("BZ");
            expect(result).toBe('W');
        });
        it('should win if input AY', () => {
            const result = defineResultBattle("AY");
            expect(result).toBe('W');
        });
        it('should lost if input AZ', () => {
            const result = defineResultBattle("AZ");
            expect(result).toBe('L');
        });
        it('should lost if input CY', () => {
            const result = defineResultBattle("CY");
            expect(result).toBe('L');
        });
        it('should lost if input BX', () => {
            const result = defineResultBattle("BX");
            expect(result).toBe('L');
        });
    });
});

describe('Total score for the strategy', () => {
    it('should return a number', () => {
        const result = totalScoreCalculationWithNewStrategy("");
        expect(result).not.toBeNaN();
        expect(result).toBe(0);
    });

    it('should return 4 if A Y', () => {
        const result = totalScoreCalculationWithNewStrategy("A Y");
        expect(result).toBe(4);
    });

    it('should return 1 if B X', () => {
        const result = totalScoreCalculationWithNewStrategy("B X");
        expect(result).toBe(1);
    });

    it('should return 7 if C Z', () => {
        const result = totalScoreCalculationWithNewStrategy("C Z");
        expect(result).toBe(7);
    });

    it('should return 15 if A Y,B X,C Z', () => {
        const result = totalScoreCalculationWithNewStrategy("A Y,B X,C Z");
        expect(result).toBe(12);
    });

    // describe('Score my choice', () => {
    //     it('should return 1 if X', () => {
    //         const result = scoreChoice("X");
    //         expect(result).toBe(1);
    //     });
    //     it('should return 2 if Y', () => {
    //         const result = scoreChoice("Y");
    //         expect(result).toBe(2);
    //     });
    //     it('should return 3 if Z', () => {
    //         const result = scoreChoice("Z");
    //         expect(result).toBe(3);
    //     });
    // });
    describe('Score result', () => {
        it('should return 0 if X', () => {
            const result = scoreResult("X");
            expect(result).toBe(0);
        });
        it('should return 2 if Y', () => {
            const result = scoreResult("Y");
            expect(result).toBe(3);
        });
        it('should return 3 if Z', () => {
            const result = scoreResult("Z");
            expect(result).toBe(6);
        });
    });
    // describe('Define battle result', () => {
    //     it('should draw if input AX', () => {
    //         const result = defineResultBattle("AX");
    //         expect(result).toBe('D');
    //     });
    //     it('should draw if input BY', () => {
    //         const result = defineResultBattle("BY");
    //         expect(result).toBe('D');
    //     });
    //     it('should draw if input CZ', () => {
    //         const result = defineResultBattle("CZ");
    //         expect(result).toBe('D');
    //     });
    //     it('should win if input CX', () => {
    //         const result = defineResultBattle("CX");
    //         expect(result).toBe('W');
    //     });
    //     it('should win if input BZ', () => {
    //         const result = defineResultBattle("BZ");
    //         expect(result).toBe('W');
    //     });
    //     it('should win if input AY', () => {
    //         const result = defineResultBattle("AY");
    //         expect(result).toBe('W');
    //     });
    //     it('should lost if input AZ', () => {
    //         const result = defineResultBattle("AZ");
    //         expect(result).toBe('L');
    //     });
    //     it('should lost if input CY', () => {
    //         const result = defineResultBattle("CY");
    //         expect(result).toBe('L');
    //     });
    //     it('should lost if input BX', () => {
    //         const result = defineResultBattle("BX");
    //         expect(result).toBe('L');
    //     });
    // });
});
// rock A X
// paper B Y
// scissor C Z

// Win 
// CX
// BZ
// A

// Lost
// AZ
// CY
// BX
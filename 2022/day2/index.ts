const input = "C Z,A Y,C Z,A Y,C Y,A Z,B Y,C X,A Y,B X,B X,A Y,C Z,C Y,C Y,A Y,C Y,B X,B X,A Z,C Y,B Z,C Z,A Z,B Y,A Y,C Z,A Z,A Y,C Z,C Z,A X,A Y,B Y,C X,B Y,C Z,A Z,A X,A Z,A Y,C Y,C X,C Y,A Z,C Z,C Z,A Y,A Z,C Z,A Y,C Z,C Y,C Z,A Z,A Y,C Z,C Y,C Y,C X,B Y,B Y,C Y,A Z,A Z,B X,B Z,B X,A Y,A Z,A Y,C Y,B X,B Y,A Z,C Y,C Z,A Y,B X,C Z,A Y,C Z,C Z,A Y,B Z,C Z,A Y,B X,A Y,C Z,C Z,B Y,B Z,B Z,A Y,A Z,B Y,C Z,C Y,C Z,A Y,C Z,C Z,C Z,C Y,A Z,A Z,C Z,C Z,A Z,C Z,C Y,C X,A Z,A Z,B Z,A Y,A Y,C X,B Y,C Y,A Y,B X,B Y,B Y,B Y,C Y,A Z,C Y,A Y,C Z,B Y,B X,A Z,C Y,B Y,A Y,C Z,B Z,B Z,A X,B Y,C Z,B Z,B Y,C Z,B X,B Y,A Y,A Y,A Y,B Y,B Y,A Z,C Z,A Y,A Z,A Y,A X,C Y,A Y,C Z,A Z,C Z,C Y,C X,B Z,A Z,C Y,C Z,A Z,C Z,C Z,C Y,C Z,C Y,C Z,C Y,C Z,C Z,C Y,B X,A Y,C Y,C Z,B Y,B Y,C X,C Z,A Z,B X,C Z,A Y,B Y,C Z,C Z,C Z,B X,A Y,C Z,B Z,B X,C Z,C Z,C X,A Y,A Y,C Z,A Y,A Y,A Y,B X,C Z,B X,C Z,A Y,A Z,B X,B Z,C Z,A Y,C Y,C Z,C Y,B X,B Y,C X,C Z,A Y,A Y,B Z,A Y,C Z,C Z,B Y,B X,C Z,C Y,C Y,B Y,C Y,A Y,C X,C Z,A Y,A Y,C Y,A Y,C X,C Z,A Y,B Z,A Y,A Y,A Y,C Z,B X,B Y,C Y,A Z,C Y,C X,B Z,A Y,C Z,A Y,B Y,B X,A Y,C X,C X,B Y,C Z,B X,C X,C Z,A Y,C Z,C X,C Z,B Y,C Z,C Z,A Y,C Z,B Y,A Y,A Y,C Y,C Z,B X,C Z,C X,C Y,B Z,A Y,B X,C Y,B Y,C Y,B Y,A Y,A Y,B X,B Z,B X,B Y,C X,C Z,A Y,C Z,C Z,C Z,C Z,B Z,C Z,B Y,A Y,C Y,C X,C Z,B X,C Z,B Y,C X,C Z,A Y,A Z,B Z,A Y,B Y,B Z,C Y,B X,A X,C Y,C X,B Y,C X,C Z,C Z,C Z,B X,C X,A X,B Y,B Z,C Z,C Z,C Y,C Z,B Y,C Y,C Y,C Z,B X,B Z,B Y,B Y,C Z,B Y,A X,B X,A Z,C Z,C Z,A Y,C Z,A Y,C Y,B Z,B Z,C Z,C X,A Y,C X,B Z,A Y,B X,A Z,A Z,B X,C X,C Y,B Y,A Y,B Y,C Z,C Z,C Y,A Y,C Y,C Z,C Y,C Z,C Z,C Z,A Y,A Z,A Y,C Z,B X,A Y,C Z,C Y,C X,C Y,C Z,C Y,A Y,A Z,C Y,A Z,C Y,A Y,A Y,C Z,C Y,A Y,A Y,B Y,B Z,A Z,C Z,C Z,C Z,C X,B X,C Z,C Y,A Z,B Y,C Z,C Z,B Y,A Z,C Z,B Z,B Y,C Y,C Y,A Z,C Z,A Z,B Y,C Y,B X,C X,B Y,A Z,C Z,C Y,C Z,B X,C Z,C Y,C X,C Z,A Y,A Z,C Y,B Y,A Z,B X,C Z,C Y,C Y,C Z,A Z,A Z,B Y,B X,B X,A Y,B X,C Y,A Y,A Y,B X,C Y,B Z,A Z,B X,C Y,C X,A Y,A Z,A Y,C Z,B Z,C Z,A Y,C Z,C X,A Z,B Y,A Y,B Y,C Z,C X,A Z,C Y,B X,A Y,C X,C Y,A Z,B Z,A Y,C Z,B Y,A Y,C Y,C X,B X,C Z,B X,C Y,C X,C Y,C Y,B X,A Y,B X,C Y,C Z,B X,C Z,B Y,A Y,C Z,A Z,A X,B Y,A Z,A Y,C Z,C X,B Y,C Y,A Y,C Y,A Z,A Z,A Z,C Y,A Y,B Y,C X,C X,C Z,A Z,C Y,C Z,C Y,C Y,A X,B Z,B Y,A Y,A X,A Z,C Z,A X,A Y,C Z,C Z,C Y,C Z,C Z,C X,B Y,B Z,B Y,A Y,B Y,B X,A Z,B Y,C Y,A Z,B Y,B Y,C X,C Z,B X,A Y,C Z,C X,A Z,A Y,A Z,C Z,B Y,B Y,C Z,A Y,A Y,C Y,B Y,C Y,C Y,C Y,A Y,C Z,B X,A Y,B Z,A Y,B X,C Z,C Y,C Y,A Y,A X,C Z,B X,B X,B X,C Y,C Y,A Z,A Y,C Z,B Z,C Z,C Z,C Y,A Y,C Y,A Z,A Y,B Y,C Z,C Y,B Y,A X,B Y,A Z,B Y,A X,A Y,B X,A Y,B Y,B X,A X,A Z,C Z,A Z,A Z,C Y,A X,A Y,C Z,C Y,A Y,B Y,A Z,A Y,B Y,C Z,C Z,B X,B Y,C Y,A Y,B Y,A Y,B Y,B Y,B Y,C Y,C Z,C Z,B X,A Y,A Y,A Y,C Y,C Y,A Y,A Y,C Z,C Z,B Y,B X,A Y,C Z,A Y,B Z,B Y,C Y,C Y,C Y,B X,A Y,C Z,A Z,B X,C Z,B Y,A Z,C Y,C Y,A Y,B X,A Y,A Y,B X,C Y,C Y,A Z,C Z,C X,C Y,B Y,B Y,C Y,C X,A Y,B Z,A Y,B Z,A Z,A Y,C Z,C Z,C Z,C Z,C Z,C Z,C Y,A Y,C Z,A Z,B Z,C Z,A Z,A Y,C X,A Z,A Y,C Z,B Z,A Y,C Y,B X,C Z,C Z,A Y,C Y,B Y,C Z,C Y,C X,A Z,B Z,A Z,A Y,B Z,C Z,C Z,A Y,A Y,C Z,A Y,A X,C Y,B Y,B X,B Y,B X,C X,C X,A X,A Y,C Y,A X,B X,C Y,A Z,B X,C Z,C Z,B Y,A Y,C Z,C Z,C Y,A Z,B X,C Y,A Y,C Z,C Z,A Z,B Z,B Z,C Z,C Y,C Z,A Y,C Z,C Z,B X,C Z,C Z,B Z,C Z,B Y,C X,C Y,C Z,B Y,A Z,C Z,A Y,B Y,C Z,C Z,C Z,A Y,A Y,A X,C Z,B X,C Z,C Y,C Y,A Z,B X,C Z,C Z,B X,C Y,A Z,C X,C Y,B Y,C Y,C X,A Z,B Z,A Z,B X,C Y,B X,C Z,C Z,B X,B Y,C Z,B Y,A Z,A Y,B Z,C X,C Z,C Y,C Z,B Y,A Z,C Z,B Y,B Y,C X,C Y,A X,B Z,C X,A Z,B Z,A Y,A Y,B X,C Z,C Z,A Y,C Z,A Z,C Y,C Z,C Z,A Z,C Z,C X,A Y,C Y,C X,C X,B X,C X,A Y,B Y,C Y,C Z,C X,C Z,A Z,C Z,A Y,A Y,B Z,B X,C X,A Y,C Z,A Y,C Y,C X,B Y,C Z,B X,A Z,A Z,C X,B X,C Z,C Z,B X,A Y,A Z,C Z,C Z,C Z,A Y,C Z,B Z,A Y,B Z,A Y,B Y,C Y,A Y,B Y,A Z,A Z,C Y,A Z,C Z,B X,C Y,B X,B X,B Y,B Z,A Y,C Y,C Z,C Y,B Z,C Y,C Y,C Z,A Y,B Z,C Y,C Z,C Z,B Z,A X,C Z,B Y,C Y,A Z,C Z,A X,C X,B Y,A Z,A Z,B X,C Z,B X,C Y,C X,C Z,C X,C Z,C Z,B X,B Y,A Y,B X,C X,B Y,A Z,A Z,C Y,C Y,B X,C Z,B Y,B X,A Y,A X,C Y,A X,C Y,C Z,C Y,C X,C Z,B X,B Z,B Z,C Z,B Y,C Z,C Y,A Y,C Y,A Y,C Z,A Y,A Y,A Z,C X,C Z,C Z,C Z,B Y,C Z,B X,A Y,A Z,C Z,B X,A Z,C Z,A Z,A Y,B Y,A Z,C Z,B Y,C Y,C Z,A X,C Z,C Z,C X,C Z,C Z,C Z,B Y,C Y,B Y,B Y,C Z,B X,A Z,A Y,C Z,C Y,B X,C X,A Y,C Z,A Y,B Y,C Z,C Y,B Y,C X,B X,B X,B X,C Y,C Y,C Y,C X,C X,A Y,B X,C Z,A Z,A X,B Y,C Z,C Y,A Y,C Y,C Y,C Y,C Y,B Y,B Y,C Y,B X,A Y,A Z,A Y,B Y,A Y,C Z,C Y,A Y,B Y,B Y,B Y,C Y,C Z,B X,B Y,C Z,C Y,C Z,C Z,C Z,B Y,C X,C Y,C Z,C Z,B Y,A Y,B Y,C Z,A Y,A Z,B X,B X,C Z,B X,A Y,C Z,B Y,B Y,C Z,B X,A Y,A Y,B X,C Z,A Z,C Z,C Y,B X,B Y,A Y,C Z,C Y,C Z,C Z,B X,B Z,C Z,C X,A Y,C X,B Z,C Z,C Z,A X,C Z,A Y,C Y,A Y,A Z,C Y,B Z,A Z,C Z,C Z,C Z,A Y,C X,C X,B Y,C Y,A Z,A Z,B X,B Z,C X,C X,C Y,C Y,C Z,A Y,C Y,B Z,B X,C Y,C Z,B Z,A Y,A Y,C Z,B Y,C Y,B Y,C X,C X,C Z,B Y,A Y,C Z,B Z,A Y,A Y,A Y,A Z,B X,C Z,A Z,C Y,C Z,B Z,B Z,B Y,C Y,C Z,C X,B Y,B X,A Y,C Y,A Z,C Z,C Z,A Y,A Z,C X,C Z,A Z,C Z,B X,C Y,A Y,B Z,B Z,B Y,C Z,C Z,B X,A Z,C Z,C Y,B Y,C Y,C Z,C Y,B X,B X,C Z,C Y,B Y,B X,C Z,B X,C Y,C Z,C Y,B Z,C Z,A Y,A Y,B X,C Z,B X,B X,A Y,B X,B X,C Y,C X,B X,C Z,C Z,C Z,C Z,C Y,B Y,C Z,C Z,A Y,A Z,C X,C Y,A Z,C Z,B X,B Y,C Z,A Z,C X,A Y,B Y,C Z,A Y,C X,A Y,C Z,C X,A Z,C Y,A X,C Y,C X,B Y,A Y,C X,C X,A Y,B X,C Z,C X,A Z,A Y,C X,C Z,C Z,C Z,C Z,C Y,A Z,C X,C Z,C Z,A Y,B X,B X,A Z,C Z,B Y,C Z,B Y,C Z,C Z,B X,C Z,C Z,B Z,C Y,A Y,C Y,B Z,C Y,C X,C Z,B X,C Z,A Y,A Y,C Y,B Y,A Z,A Y,A Z,C Y,B Y,A Z,C Z,C Y,C Y,B Z,B Z,C X,A Y,B X,B Y,B Y,C Z,A Z,C Z,B X,C Z,C Y,C Y,C Y,C X,B X,C Y,A X,B Y,A Z,C Z,C Z,C X,A Z,B X,C Y,C Z,B Y,A X,B Y,C Z,A X,C Z,B Y,C Y,A Y,C Y,B Z,C Z,A Y,A Y,A Y,A Y,A Z,C Z,B Y,C Z,C Y,B X,A Y,C Z,C Z,C X,B Z,C X,A X,B Z,C Z,A Y,A Z,A Y,A Z,C Y,B Y,A Z,C Z,B Y,B Y,C X,A Z,C X,A Z,C Y,C X,C Z,A Y,B Y,B Z,C Z,B X,B X,C Z,C Z,B Z,C X,A Y,B X,B Y,C Z,C X,B Z,B X,B X,A Z,C Z,A Z,C Z,C Z,A Y,C Z,A Y,C Y,A Y,C Z,C Z,C Z,A Y,C Z,A X,B X,B Y,C X,C Z,A Y,C Z,C Y,C Z,C Y,C X,A Y,C Z,C Y,C Y,C Z,A Y,C Z,C X,C X,B X,B X,C Z,C Y,A Z,C Z,C X,C Z,C Y,B Y,C Z,C X,B X,C X,A Y,C Z,A Z,A Y,C Z,C Z,B X,B Y,C Z,C Z,C Y,C Y,C Y,C Z,A Z,B Y,B X,B Y,A Y,C Y,A Y,B Y,B X,B X,C X,C Z,C Z,C Z,A X,B Z,A Z,C Z,C Z,B X,B X,B Y,C Z,C X,A Y,C Z,B X,C Z,B Y,C X,B Z,C X,A Y,B X,C X,C Y,A Y,C Z,A Y,B X,B Z,A Y,C Z,C Y,C Y,C Y,C Y,C X,C Z,B Y,B Y,A Y,B Z,A Y,C Y,C Y,B Z,B Y,C Z,B Z,C Z,B X,B Y,A X,B X,A Y,A Z,C X,C X,C Z,B Z,B Y,A Z,A Y,A Y,C Z,C Z,C X,B X,C Z,C Y,C Y,C Y,C Y,B Y,A Y,B Y,A Z,B X,C Z,C Y,C Z,B Y,C X,B X,A X,C Z,C Z,B Y,A Y,B Y,B Y,C Y,A Z,B Z,C X,A Y,A Y,C Y,A Z,C Z,C X,C X,B Z,C Y,B X,B Y,C Z,C Z,C Y,A Y,A Y,C X,A Y,C X,B Y,C X,C Z,A Z,C X,C Z,C Z,A Y,C Z,C Y,B X,A Y,B Y,C X,A Y,A Y,C Z,C Z,B X,C Y,A Z,A Y,C Z,C X,C Z,C Z,A Y,A Y,C Z,A Y,C Z,B Y,C Y,C Z,C Z,B Z,C Y,B Z,A Z,B Y,B X,B X,C X,C X,A Z,C Z,B X,A Z,C X,B Y,B Y,C Z,A X,C X,C X,B X,A Y,A Z,C Z,C Y,C Z,A Y,B X,C Z,B Y,C Y,A Z,B Y,C Z,B X,B Z,C Z,A Y,A Z,C Z,C Y,A Z,A Z,C Z,B X,A Y,A Y,A Y,A Y,C Z,A X,B Z,A Y,B X,C Z,B X,C Y,B Y,C Z,B X,B Z,A Y,C Z,B Y,C Z,A Y,A Z,C Z,B Y,A Y,C Y,C X,B Y,B X,B Y,C Z,C Z,C Y,A Y,A Z,C Y,C Z,C Z,B Y,B X,C Z,B X,A Y,C Y,A Z,A Y,C Z,B Y,C Y,A Y,B X,B Z,C Y,C Y,A X,C X,C Y,C Y,C Z,B Z,C Z,A Z,A Y,C Y,C Y,B Y,C Y,C Y,C Y,C Z,B Z,C Y,C Y,B X,B Z,B Z,C Z,B Z,C X,A X,C Z,B X,C Z,A Y,A Z,C Z,C Z,B X,B X,A Y,A Z,B X,B Z,C X,A Y,A Y,C Z,A Y,B Y,B Z,A Z,B X,C Z,C Z,B Z,B Y,C Z,C Y,A Y,C Z,C Z,A Y,A Y,B X,B Y,A Y,C Y,B Y,C Z,A Y,C Z,B Y,B X,C X,A Y,A Y,B X,C Y,A Y,A Y,B Y,C Z,A Z,C Y,C Z,C Z,C Z,A Z,A Z,A Y,A Z,C X,B Z,A Y,A Y,C Y,C X,B X,C Y,C Y,C Z,C Z,A Z,A Y,C Y,B Y,C Y,C Z,C Z,B Y,B Y,A Y,B Y,C Z,A X,B X,C X,C Z,B Y,A Z,A Y,B Z,C Z,B Y,C Z,C Y,C Z,A Y,A Y,A Z,C X,C Z,A Y,B Z,B X,C X,C Z,C Z,C Z,C Y,C Z,B X,C Z,C Z,C Y,C X,B Z,B X,C Y,C Z,B Y,A Y,C Y,A Z,C Z,B Z,A Y,A Z,A Z,A Y,C Z,C Y,A Y,B X,B Y,C Y,C Z,B Y,B X,B Y,B Y,C Y,B Y,C Z,A Z,C Y,A Y,B X,B Z,B Y,A Y,B X,B Z,A Y,C Y,B Y,C Y,C Y,B Y,C Z,B Z,A Z,C Y,C Z,A X,C Z,C Z,A Y,C Z,A Z,A Y,A X,C Y,B Y,C Y,C X,B X,A Y,A Y,A Y,A Z,A Y,C X,C Y,C X,A Y,B X,C Z,A Z,C Y,B Z,C Z,B Y,C X,C Z,C Z,C Z,C Z,B X,C Y,B X,A Y,A Y,C Z,C X,C Z,C X,C Y,C Y,B X,C Z,B X,C Z,C Z,A Y,C Z,C Z,C Z,B Z,C Z,A X,C Z,C X,C X,C Y,A Z,B X,A Y,A Y,A Y,C Z,C Y,B X,A Z,C Z,C Z,C Z,C Z,B X,C Z,C Z,C Y,B Y,A Z,A Y,A Z,B X,C Z,C Y,B Y,A Y,C Z,B X,A Y,A Y,C Z,B Y,C Y,C Z,C Y,A Y,B X,C Z,A X,C Y,C Z,B Y,A Y,B X,B Y,C Y,B Y,C Z,C Z,A Z,B X,B Y,B Y,A Y,B X,C Y,A Y,B Y,A Y,C Y,C Y,B Y,C Z,C X,B Z,A Z,A Y,B X,B Y,C Y,C Z,A Z,B Z,B X,C X,C Y,C X,A Y,A Y,C Z,C Y,C X,B X,B Z,C Z,C Z,B X,C Y,C Z,C X,C Y,C X,A Z,C Y,B Y,B Y,C Y,A Z,B Y,C Z,C Y,A Z,A Y,C Z,C X,B Z,C Z,C Z,A Y,C Y,C Z,C Y,B Z,B Y,B Y,A Z,C X,A Y,C Z,C Y,A Y,C X,C Z,C Z,B Z,C X,C Z,A Y,A Y,B Y,C X,A Y,C Z,A Z,C Y,B Y,A Y,A Z,C Z,B X,A Y,C Z,A Z,C Z,C Y,C Z,C Z,C Y,A Y,C Z,A Y,B X,B Z,C Z,C Z,C Y,C Z,C Y,C Y,B X,C X,B Y,C Y,C Z,B Y,B Y,A Z,A Y,B Y,B X,C Z,C X,A Y,C Z,C Y,A Y,C Z,A X,A Z,A X,C Z,A X,B Y,C X,C Y,C Z,B Z,C Y,B Y,C Z,B Y,C Y,C Z,A Y,B Y,A Z,B Z,C Z,A Y,C Y,B X,C Y,A X,A Y,C Z,C X,C X,B Y,B Z,B Z,C Y,C Z,B Y,C Z,C Y,A Y,B Y,C Y,C Z,B Z,C Z,C Z,A Y,B Y,A Y,C Z,A Y,A Y,C Y,A Z,C X,A Y,A Z,B Y,A Y,B Y,C Z,B X,C Y,A Y,C Y,C Z,A Y,C Y,C Y,A Y,C Y,C Y,B X,A Y,C Z,A Y,A Y,A Y,B Y,C Y,A Y,C Z,B X,C Z,A Y,B Y,C Y,A Y,C Y,C Y,C Y,C Y,C X,C X,A Y,C X,C Z,B Z,A Y,B Y,C Z,B X,C X,A Y,B X,C Y,B Z,B Y,C Y,C Z,C Z,C X,A Z,C Y,A Z,C Z,B Z,A Y,C Y,B Y,A Y,B X,C Z,C Y,A Y,A Y,A Z,C Z,C Z,C Y,C Z,B X,C Y,C Z,A Y,B Y,B X,A Z,C Z,C Y,C Z,B Y,C X,C Y,C Z,B Y,A Y,A Z,B X,C Z,C X,A Y,B X,C Z,C Y,B Z,C Z,C Z,C Z,A Y,A Y,A X,B Z,A Y,C Z,C Z,C Z,B X,B Y,C Y,B Y,A Y,A Z,A Y,A Y,B Z,A Y,C X,C Y,A Z,C Z,C Y,C Z,B Y,C Z,B X,B X,A Y,B Z,B X,B Y,B Y,B X,B Y,A Z,C Z,C Y,C Y,A Z,B Y,C Z,A Y,C Y,A Y,A Y,B X,C Y,A Z,B X,B X,A Y,C Y,A Y,C Z,B Y,C Z,C Y,A X,C Z,C Z,C Z,A Y,C Z,C X,C Z,C X,C Z,B Y,A Y,A Y,A Y,B X,B Y,B Z,B X,C Z,C Y,B Z,A Z,A Z,C X,C Z,B X,A Z,C X,A X,B Y,B X,B X,C Z,C Y,A X,C Y,C Y,C Y,B X,A Z,B Y,B X,A Z,C Z,B X,A Z,A Y,B Z,B Y,C X,C Z,B X,C Y,C Y,C Y,A Y,C Z,A Z,A Z,C Y,C Y,A Y,C Z,C Z,B X,C Z,C Z,B Y,A Y,C Z,B X,C Y,C Y,C Z,C Z,A Y,C Z,C Y,B X,C X,A X,A Z";

export const scoreChoice = (choice: string ):number => {
    if(choice === 'X' || choice === 'A') {
        return 1;
    } else if(choice === 'Y' || choice === 'B') {
        return 2;
    } else {
        return 3;
    }
}

export const scoreResult = (choice: string ):number => {
    if(choice === 'D' || choice === 'Y') {
        return 3;
    } else if(choice === 'W' || choice === 'Z' ) {
        return 6;
    } else {
        return 0;
    }
}

export const defineResultBattle = (battle: string): string =>{
    switch (battle) {
        case "CX":
        case "BZ":
        case "AY":            
            return 'W';
        case "AZ":
        case "CY":
        case "BX":            
            return 'L';   
        default:            
            return 'D';  
    }
}

export const parseInput = (strategy: string, handler: Function) => {
    const parsedInput = strategy.split(',').filter(item => Boolean(item)).map(item => { item = item.replace(' ', ''); return item; });
    if(parsedInput.length){
        return handler(parsedInput);
    }
    return 0;
}

enum Vitories {
    A='C',
    C='B',
    B='A'
}

const scoreBattle = (oponentChoice:string, result: string) => {
    if(result === 'X'){
        const [_,choice] = Object.entries(Vitories).find(([key, _]) => key === oponentChoice);
        return scoreChoice(choice);
    } else if (result === 'Z') {
        const [choice,_] = Object.entries(Vitories).find(([_, value]) => value === oponentChoice);
        return scoreChoice(choice);
    } else {
        return scoreChoice(oponentChoice);
    }
}

export const totalScoreCalculation = (strategy: string): number => {
    const totalScoreCalculationHandler = (parsedInput: string []):number => parsedInput.reduce(
            (totalScore:number, battle:string): number =>{
            totalScore = totalScore +  scoreResult(defineResultBattle(battle))+ scoreChoice(battle[1]);
            return totalScore;
        },0);
    return parseInput(strategy, totalScoreCalculationHandler);
}

export const totalScoreCalculationWithNewStrategy = (strategy: string): number => {
    const totalScoreCalculationHandler = (parsedInput: string []):number => parsedInput.reduce(
            (totalScore:number, battle:string): number =>{
            totalScore = totalScore + scoreResult(battle[1]) + scoreBattle(battle[0],battle[1]);
            return totalScore;
        },0);
    return parseInput(strategy, totalScoreCalculationHandler);
}

console.log(totalScoreCalculation(input))
console.log(totalScoreCalculationWithNewStrategy(input))


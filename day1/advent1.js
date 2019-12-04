const readline = require('readline');
const fs = require('fs');
const { bindCallback, } = require('rxjs');

const getFuelMass = value => Math.floor(parseInt(value, 10) / 3) - 2;

const getTotalFuelMass = (value, totalFuelMass) => {
    const fuelMass = getFuelMass(value);
    return fuelMass > 0 ? getTotalFuelMass(fuelMass, totalFuelMass + fuelMass) :totalFuelMass;
}

const callBack = lines => {
    let totalFuelValue = 0;
    lines.forEach(line => {
        const result = getTotalFuelMass(line, 0);
        totalFuelValue += result;
    });
    console.log("TotalFuelValue ", totalFuelValue)
}

function _readLines(path, callBack) {
    const lines = new Array();
    const line = readline.createInterface({
        input: fs.createReadStream(path),
        crlfDelay: Infinity,
    });
    line.on('line', value => { lines.push(value) });
    line.on('close', () => { callBack(lines) });
}

const _readFileObservable = bindCallback(_readLines);

_readFileObservable('./input').subscribe(callBack);

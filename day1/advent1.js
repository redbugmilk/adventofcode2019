const readline = require('readline');
const fs = require('fs');
const { bindCallback, } = require('rxjs');

const callBack = lines => {
    const result = lines.reduce(result, line => {
        result += Math.floor(parseInt(line, 10) / 3) - 2;
    });
    console.log("Result ", result)
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

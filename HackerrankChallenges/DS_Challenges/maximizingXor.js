'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maximizingXor function below.
function maximizingXor(l, r) {
    var max_sum = 0;
    for (var j = l; j <= r; j++)
    {
        for (var k = j + 1; k <= r; k++)
        {
            if ((j ^ k) >= max_sum) {
                max_sum = j ^ k;
            }
           
        }

    }
    return max_sum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine(), 10);

    const r = parseInt(readLine(), 10);

    let result = maximizingXor(l, r);

    ws.write(result + "\n");

    ws.end();
}


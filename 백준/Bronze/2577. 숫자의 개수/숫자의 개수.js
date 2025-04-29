const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(Number(line));
  if (input.length === 3) {
    let result = 1;
    for (let i = 0; i < input.length; i++) {
      result *= input[i];
    }

    const digitArray = String(result).split("").map(Number);

    const map = new Map([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
      [9, 0],
    ]);

    for (let i = 0; i < digitArray.length; i += 1) {
      const digit = digitArray[i];
      map.set(digit, map.get(digit) + 1);
    }

    for (let i = 0; i <= 9; i++) {
      console.log(map.get(i));
    }

    rl.close();
  }
});
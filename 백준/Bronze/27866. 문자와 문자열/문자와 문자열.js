const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function(line) {
  input.push(line);
  if (input.length === 2) {
    const a = input[0];
    const b = parseInt(input[1]);
    const arr = [...a];
    console.log(arr[b-1]);
    rl.close();
  }
});
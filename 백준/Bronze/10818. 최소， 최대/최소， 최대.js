const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  
  if (input.length === 2) {
    const T = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    console.log(Math.min(...arr), Math.max(...arr));
    rl.close();
  }
});
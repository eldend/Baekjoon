const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function(line) {
  input.push(Number(line));
  if (input.length === 9) {
    const [a, b, c, d, e, f, g, h, i] = input;
    const max = Math.max(...input);
    console.log(max);
    console.log(input.indexOf(max)+1);
    rl.close();
  }
});
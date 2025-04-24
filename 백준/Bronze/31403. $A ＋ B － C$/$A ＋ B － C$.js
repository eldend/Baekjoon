const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function(line) {
  input.push(line);
  if (input.length === 3) {
    const a = input[0];
    const b = input[1];
    const c = input[2];
    console.log(Number(a) + Number(b) - Number(c));
    console.log(a + b - c);
    rl.close();
  }
});
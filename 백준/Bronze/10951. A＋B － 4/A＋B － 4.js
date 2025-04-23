const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    console.log(a + b);
  }
  process.exit();
});

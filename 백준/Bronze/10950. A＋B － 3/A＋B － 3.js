const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  const T = Number(input[0]);
  if (input.length === T + 1) {
    for (let i = 1; i <= T; i++) {
      const [A, B] = input[i].split(" ").map(Number);
      console.log(A + B);
    }
    rl.close();
  }
});

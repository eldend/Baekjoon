const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    let [a, b] = input[i].split(" ").map(Number);

    if (b >= 45) {
      console.log(a + " " + (b - 45));
    } else {
      a = a === 0 ? 23 : a - 1;
      b = b + 60 - 45;
      console.log(a + " " + b);
    }
  }
  process.exit();
});

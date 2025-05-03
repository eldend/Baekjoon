const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  if (line.trim() === "0 0 0") {
    rl.close();
    return;
  }

  input.push(line);
});

rl.on("close", function () {
  for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);

    const sides = [a, b, c].sort((x, y) => x - y);
    if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
});

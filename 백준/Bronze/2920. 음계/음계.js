const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
  for (let i = 0; i < input.length; i += 1) {
    const arr = input[i].split(" ").map(Number);
    let ascending = true;
    let descending = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) ascending = false;
      if (arr[i] !== arr[i - 1] - 1) descending = false;
    }

    if (ascending) {
      console.log("ascending");
    } else if (descending) {
      console.log("descending");
    } else {
      console.log("mixed");
    }
  }
  rl.close();
});
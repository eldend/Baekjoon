const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = null;

rl.on("line", function (line) {
  if (a === null) {
    a = parseInt(line);
  } else {
    const input = line.slice(0, a);
    const arr = input.split("").map(Number);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }

    console.log(result);
    rl.close();
  }
});

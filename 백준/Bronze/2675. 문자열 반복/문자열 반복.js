const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
  const T = Number(input[0]);
  if (input.length === T + 1) {
    for (let i = 1; i <= T; i++) {
      const [numStr, char] = input[i].split(" ");
      const num = parseInt(numStr);
      const arr = char.split("");
      for (let i = 0; i < arr.length; i += 1) {
        arr[i] = arr[i].repeat(num);
      }
      console.log(arr.join(""));
    }
    rl.close();
  }
});
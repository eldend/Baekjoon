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
        let score = 0;
        let combo = 0;
        for (const ch of input[i]) {
            if (ch === 'O') {
            combo++;
            score += combo;
            } else {
            combo = 0;
            }
        }
        console.log(score);
    }
    rl.close();
  }
});
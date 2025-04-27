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
      const [H, W, N] = input[i].split(" ").map(Number);
      let floor = N % H;
      let room = Math.ceil(N / H);

      if (floor === 0) {
        floor = H;
        room = Math.floor(N / H);
      }

      console.log(`${floor}${room.toString().padStart(2, "0")}`);
    }
    rl.close();
  }
});

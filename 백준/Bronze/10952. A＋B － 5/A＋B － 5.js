const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
  for (let i = 0; i < input.length; i++) {
    if(input[i] == '0 0')
        rl.close();
  }
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    let result = a + b;
    if(result !== 0)
        console.log(a + b);
  }
  process.exit();
});

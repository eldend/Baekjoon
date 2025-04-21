const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const a = Number(input[0]);
    const b = input[1];

    const b1 = Number(b[2]);
    const b2 = Number(b[1]);
    const b3 = Number(b[0]);

    console.log(a * b1);
    console.log(a * b2);
    console.log(a * b3);
    console.log(a * Number(b));

    rl.close();
  }
});

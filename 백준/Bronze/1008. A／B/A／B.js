const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [a, b] = line.split(' ').map(Number);
  console.log(parseFloat(a / b, 2));
  rl.close();
});

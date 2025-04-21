const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const a = [line];
  console.log(a + '??!');
  rl.close;
  process.exit();
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const arr = [...line];
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== " " && arr[i + 1] === " ") {
      count += 1;
    }
  }
  if (arr[arr.length - 1] !== " ") {
    count += 1;
  }

  console.log(count);
  rl.close();
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const a = line;
  let translate = a.charCodeAt();
  console.log(translate);
  rl.close();
})
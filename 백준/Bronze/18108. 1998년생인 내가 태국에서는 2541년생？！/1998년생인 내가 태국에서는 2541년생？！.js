const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const y = line;
  if(y >= 1000 & y <= 3000){
    console.log(y - 543);
  }
  else{
    console.log("년도는 1000~3000사이로 입력해주세요.")
  }
  rl.close;
  process.exit();
});

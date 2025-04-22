const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
input = [];
rl.on('line', (line) => {
    const [a] = line.split(" ").map(Number);
    for(i = 1; i <= a; i++){
        console.log(i);
    }
    rl.close();
});

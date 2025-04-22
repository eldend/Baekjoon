const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
input = [];
rl.on('line', (line) => {
    const [a, b, c, d, e] = line.split(" ").map(Number);
    f = ((a**2) + (b**2) + (c**2) + (d**2) + (e**2)) % 10
    console.log(f);
    rl.close();
});

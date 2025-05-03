const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
    const arr = line.split("");
    const result = {
        a: -1, b: -1, c: -1, d: -1, e: -1, f: -1, g: -1,
        h: -1, i: -1, j: -1, k: -1, l: -1, m: -1, n: -1,
        o: -1, p: -1, q: -1, r: -1, s: -1, t: -1, u: -1,
        v: -1, w: -1, x: -1, y: -1, z: -1
      };
    for (let i = 0; i < arr.length; i++) {
        const ch = arr[i].toLowerCase();
        if (result.hasOwnProperty(ch) && result[ch] === -1) {
          result[ch] = i;
        }
    }
    console.log(Object.values(result).join(" "));
    rl.close();
});
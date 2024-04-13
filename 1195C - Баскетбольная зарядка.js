const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (testCount) => {
  for (let test = 1; test <= testCount; ++test) {
    rl.question(``, (n) => {
      let inp = [[], []];

      const readArray = (row, col) => {
        rl.question(``, (line) => {
          inp[row] = line.split(' ').map(Number);

          if (row === 1) {
            const result = findMaxScore(inp);
            console.log(`${result}`);
            if (test === testCount) rl.close();
          } else {
            readArray(1, 0);
          }
        });
      };

      readArray(0, 0);
    });
  }
});

function findMaxScore(inp) {
  let d = [0, 0];

  for (let i = 0; i < inp[0].length; ++i) {
    const next = [
      Math.max(d[0], d[1] + inp[0][i]),
      Math.max(d[1], d[0] + inp[1][i])
    ];
    d = next;
  }

  return Math.max(d[0], d[1]);
}

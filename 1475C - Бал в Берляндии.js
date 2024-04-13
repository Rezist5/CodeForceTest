const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solve() {
  rl.question('', (line) => {
    const [A, B, k] = line.split(' ').map(Number);
    const a = new Array(A).fill(0);
    const b = new Array(B).fill(0);
    const edges = [];
    rl.question('', (line) => {
      line.split(' ').forEach((val) => {
        edges.push([Number(val) - 1]);
      });
      rl.question('', (line) => {
        line.split(' ').forEach((val, index) => {
          edges[index].push(Number(val) - 1);
        });
        edges.forEach((edge) => {
          const [aIdx, bIdx] = edge;
          a[aIdx]++;
          b[bIdx]++;
        });
        let ans = 0;
        edges.forEach((edge) => {
          const [aIdx, bIdx] = edge;
          ans += k - a[aIdx] - b[bIdx] + 1;
        });
        console.log(Math.floor(ans / 2));
        rl.question('', () => {
          rl.close();
        });
      });
    });
  });
}

rl.question('', (t) => {
  t = parseInt(t, 10);
  let count = 0;
  rl.on('line', () => {
    if (count < t) {
      solve();
      count++;
    } else {
      rl.close();
    }
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (t) => {
  const arr = [];

  const runTests = (testsLeft) => {
    if (testsLeft === 0) {
      arr.forEach((value) => {
        console.log(value);
      });
      rl.close();
      return;
    }

    rl.question('', (line) => {
      const [n, k] = line.split(' ').map(Number);
      const mid = 4 * n - 3;
      let result;
      if (k === mid) {
        result = 2 * n - 1;
      } else if (k < mid) {
        result = (2 * n - 1) - Math.ceil((mid - k) / 2);
      } else {
        result = (2 * n - 1) + Math.ceil(Math.abs(mid - k) / 2);
      }
      arr.push(result);
      runTests(testsLeft - 1);
    });
  };

  runTests(parseInt(t, 10));
});

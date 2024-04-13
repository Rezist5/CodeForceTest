const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question('', (t) => {
  const runTests = (testsLeft) => {
    if (testsLeft === 0) {
      answers.forEach((value) => {
        console.log(value);
      });
      rl.close();
      return;
    }

    rl.question('', (line) => {
      const [n, a, b] = line.split(' ').map(Number);
      const minCost = Math.min(n * a, Math.floor(n / 2) * b + (n % 2) * a);
      answers.push(minCost);
      runTests(testsLeft - 1);
    });
  };

  runTests(parseInt(t, 10));
});

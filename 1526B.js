const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (TC) => {
  const runTests = (testsLeft) => {
    if (testsLeft === 0) {
      rl.close();
      return;
    }

    rl.question('', (n) => {
      n = parseInt(n);
      let fg = false;

      for (let x = 0; x < 20; x++) {
        if (n % 11 === 0) {
          console.log("YES");
          fg = true;
          break;
        }

        n -= 111;
        if (n < 0) break;
      }

      if (!fg) {
        console.log("NO");
      }

      runTests(testsLeft - 1);
    });
  };

  runTests(parseInt(TC, 10));
});

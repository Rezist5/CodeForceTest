const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (t) => {
  const winBy = { 'R': 'P', 'S': 'R', 'P': 'S' };

  const runTests = (testsLeft) => {
    if (testsLeft === 0) {
      rl.close();
      return;
    }

    rl.question('', (s) => {
      let maxCnt = '\0';
      let maxCount = 0;
      const count = {};

      for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        if (count[s[i]] > maxCount || (count[s[i]] === maxCount && s[i] < maxCnt)) {
          maxCnt = s[i];
          maxCount = count[s[i]];
        }
      }

      console.log(Array.from({ length: s.length }, () => winBy[maxCnt]).join(''));
      runTests(testsLeft - 1);
    });
  };

  runTests(parseInt(t, 10));
});

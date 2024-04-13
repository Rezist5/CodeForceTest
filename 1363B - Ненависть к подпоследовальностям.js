const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (t) => {
  const runTests = (testsLeft) => {
    if (testsLeft === 0) {
      rl.close();
      return;
    }

    rl.question('', (s) => {
      let suf0 = 0, suf1 = 0;
      for (let i = 0; i < s.length; i++) {
        suf0 += (s[i] === '0' ? 1 : 0);
        suf1 += (s[i] === '1' ? 1 : 0);
      }
      let ans = Math.min(suf0, suf1);
      let pref0 = 0, pref1 = 0;
      for (let i = 0; i < s.length; i++) {
        pref0 += (s[i] === '0' ? 1 : 0);
        suf0 -= (s[i] === '0' ? 1 : 0);
        pref1 += (s[i] === '1' ? 1 : 0);
        suf1 -= (s[i] === '1' ? 1 : 0);
        ans = Math.min(ans, pref1 + suf0);
        ans = Math.min(ans, pref0 + suf1);
      }
      console.log(ans);
      runTests(testsLeft - 1);
    });
  };

  runTests(parseInt(t, 10));
});

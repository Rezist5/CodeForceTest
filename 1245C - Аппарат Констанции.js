const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MOD = 1000000007;

rl.question('', (s) => {
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === 'w' || s[i] === 'm') {
      console.log(0);
      rl.close();
      return;
    }
  }

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1];
    if (s[i - 1] === s[i - 2] && (s[i - 1] === 'u' || s[i - 1] === 'n')) {
      dp[i] = (dp[i] + dp[i - 2]) % MOD;
    }
  }

  console.log(dp[n]);
  rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mod = 1e9 + 7;

function fastPow(a, p) {
  let res = 1;
  while (p) {
    if (p % 2 === 0) {
      a = (a * a) % mod;
      p /= 2;
    } else {
      res = (res * a) % mod;
      p--;
    }
  }
  return res;
}

function fact(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = (res * i) % mod;
  }
  return res;
}

function C(n, k) {
  return (
    (fact(n) *
      fastPow(fact(k), mod - 2) %
      mod *
      fastPow(fact(n - k), mod - 2) %
      mod) %
    mod
  );
}

function solve() {
  rl.question('', (line) => {
    const [n, k] = line.split(' ').map(Number);
    const cnt = new Array(n + 1).fill(0);
    rl.question('', (line) => {
      line.split(' ').forEach((val) => {
        const x = parseInt(val);
        cnt[x]++;
      });
      for (let i = n; i >= 0; i--) {
        if (cnt[i] >= k) {
          console.log(C(cnt[i], k));
          return;
        } else {
          k -= cnt[i];
        }
      }
      console.log(1);
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

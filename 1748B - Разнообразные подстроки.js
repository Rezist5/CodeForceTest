const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tc() {
  rl.question('', (line) => {
    const [n, s] = line.split(' ');
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
      const fr = new Array(10).fill(0);
      let distinct = 0,
          maxFreq = 0;

      for (let j = i; j < s.length && ++fr[parseInt(s[j], 10)] <= 10; j++) {
        maxFreq = Math.max(maxFreq, fr[parseInt(s[j], 10)]);
        if (fr[parseInt(s[j], 10)] === 1) distinct++;

        if (distinct >= maxFreq) ans++;
      }
    }
    console.log(ans);
    rl.question('', () => {});
  });
}

rl.question('', (t) => {
  t = parseInt(t, 10);
  let count = 0;
  rl.on('line', () => {
    if (count < t) {
      tc();
      count++;
    } else {
      rl.close();
    }
  });
});

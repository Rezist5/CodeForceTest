function f(a, b) {
    let ret = 0;
    let zeroes = 0;
  
    for (let i = 1; i <= b; i <<= 1) {
      if (b & i) {
        b ^= i;
        if (!(a & b))
          ret += 1 << zeroes;
      }
  
      if (!(a & i))
        zeroes++;
    }
  
    return ret;
  }
  
  function rec(a, b) {
    if (a === b)
      return 0;
    if (a === 0)
      return 2 * b - 1 + rec(1, b);
  
    let ret = 0;
    if (a & 1) {
      ret += 2 * (f(a, b) - f(a, a));
      a++;
    }
    if (b & 1) {
      ret += 2 * (f(b - 1, b) - f(b - 1, a));
      b--;
    }
  
    return ret + 3 * rec(a >> 1, b >> 1);
  }
  
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
  
      rl.question('', (line) => {
        const [a, b] = line.split(' ').map(Number);
        console.log(rec(a, b + 1));
        runTests(testsLeft - 1);
      });
    };
  
    runTests(parseInt(t, 10));
  });
  
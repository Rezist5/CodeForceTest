const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPerfectSquare(n) {
  const sqrtN = Math.sqrt(n);
  return sqrtN * sqrtN === n;
}

rl.question('', (input) => {
  const [n, k] = input.split(' ').map(Number);

  const divisors = [];
  for (let i = 1; i * i <= n; ++i) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) 
        divisors.push(n / i);
    }
  }

  if (k <= divisors.length) { 
    divisors.sort((a, b) => a - b);
    console.log(divisors[k - 1]);
  } else {
    console.log(-1);
  }

  rl.close();
});

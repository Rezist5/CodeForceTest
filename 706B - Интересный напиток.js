const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countShops(prices, money) {
  let low = 0, high = prices.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (prices[mid] <= money) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

rl.question('', (n) => {
  const prices = [];

  const readPrices = () => {
    if (prices.length === parseInt(n, 10)) {
      prices.sort((a, b) => a - b);

      rl.question('', (q) => {
        const sols = [];

        const readQueries = (i) => {
          if (i === parseInt(q, 10)) {
            for (let j = 0; j < sols.length; j++) {
              console.log(sols[j]);
            }
            rl.close();
          } else {
            rl.question('', (money) => {
              const shops = countShops(prices, parseInt(money, 10));
              sols.push(shops);
              readQueries(i + 1);
            });
          }
        };

        readQueries(0);
      });
    } else {
      rl.question('', (line) => {
        const priceArr = line.split(' ').map(Number);
        prices.push(...priceArr);
        readPrices();
      });
    }
  };

  readPrices();
});

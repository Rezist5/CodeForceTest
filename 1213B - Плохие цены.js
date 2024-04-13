const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (t) => {
  t = parseInt(t);
  let testCase = 0;

  const processTest = () => {
    rl.question('', (nInput) => {
      const n = parseInt(nInput);
      let prices = [];

      const readPrices = () => {
        rl.question('', (priceInput) => {
          prices.push(parseInt(priceInput));

          if (prices.length === n) {
            const result = findBadDays(prices);
            console.log(result);
            testCase++;
            if (testCase === t) {
              rl.close();
            } else {
              processTest();
            }
          } else {
            readPrices();
          }
        });
      };

      readPrices();
    });
  };

  processTest();
});

function findBadDays(prices) {
  let maxPrice = prices[prices.length - 1];
  let badDays = 0;

  for (let i = prices.length - 2; i >= 0; --i) {
    if (prices[i] > maxPrice) {
      ++badDays;
    } else {
      maxPrice = prices[i];
    }
  }

  return badDays;
}

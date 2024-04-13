const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function compare(a, b) {
  return a.price - b.price;
}

rl.question('', (n) => {
  const laptops = [];

  const readLaptops = () => {
    if (laptops.length === parseInt(n, 10)) {
      laptops.sort(compare);

      for (let i = 0; i < laptops.length - 1; ++i) {
        if (laptops[i].quality > laptops[i + 1].quality) {
          console.log("Happy Alex");
          rl.close();
          return;
        }
      }

      console.log("Poor Alex");
      rl.close();
    } else {
      rl.question('', (line) => {
        const [price, quality] = line.split(' ').map(Number);
        laptops.push({ price, quality });
        readLaptops();
      });
    }
  };

  readLaptops();
});

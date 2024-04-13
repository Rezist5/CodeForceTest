const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  const n = BigInt(input);

  let people = BigInt(5);
  let cycles = BigInt(0);

  while (n > people) {
    n -= people;
    people *= BigInt(2);
    cycles++;
  }

  const index = (n - BigInt(1)) / (BigInt(1) << cycles);
  let result;
  switch (Number(index)) {
    case 0:
      result = "Sheldon";
      break;
    case 1:
      result = "Leonard";
      break;
    case 2:
      result = "Penny";
      break;
    case 3:
      result = "Rajesh";
      break;
    default:
      result = "Howard";
  }
  
  console.log(result);
  rl.close();
});
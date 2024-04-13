const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (n) => {
  rl.question('', (str) => {
    const ch = ["", "", "2", "3", "223", "5", "53", "7", "7222", "7332"];
    let an = "";

    for (let i = 0; i < str.length; ++i)
      an += ch[parseInt(str[i])];

    an = an.split('').sort().reverse().join('');
    
    console.log(an);
    rl.close();
  });
});

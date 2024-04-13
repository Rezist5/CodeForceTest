const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fixCapsLock(word) {
  let allUpper = true;

  for (let i = 1; i < word.length; ++i) {
    if (!word[i].match(/[A-Z]/)) {
      allUpper = false;
      break;
    }
  }

  if (allUpper) {
    for (let i = 0; i < word.length; ++i) {
      if (word[i].match(/[A-Z]/))
        word = word.substring(0, i) + word[i].toLowerCase() + word.substring(i + 1);
      else
        word = word.substring(0, i) + word[i].toUpperCase() + word.substring(i + 1);
    }
  }

  return word;
}

rl.question('', (word) => {
  console.log(fixCapsLock(word));
  rl.close();
});

const prompt = require('prompt-sync')();

function divisibles(num, divisor) {
  let divisiblesnum = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % divisor === 0) {
      divisiblesnum.push(num[i]);
    }
  }
  return divisiblesnum;
}


console.log(divisibles([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],2))

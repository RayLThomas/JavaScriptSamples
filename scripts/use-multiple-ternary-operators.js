/*
Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
*/


function checkSign(num) {
  return num > 1 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

console.log(checkSign(10));
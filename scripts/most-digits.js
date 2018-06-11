/* 
Most Digits
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
  for (largest = 0, i = 0; i < array.length; i++){
    array[i].toString().length > largest.toString().length ? largest = array[i] : false;
  }
  return largest;
}


document.getElementById("output").innerHTML = findLongest([12, 199, 1209, 9999, 3 , 15]);
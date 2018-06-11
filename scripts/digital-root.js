/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
*/

function digitalRoot(n) {
	var nArray = [];
	let nStringArray = n.toString().split("");
	for (i = 0; i < nStringArray.length; i++) {
		nArray[i] = parseInt(nStringArray[i], 10);
	}


	if (nArray.length > 1 ) {
		nArray = nArray.reduce(function (accumulator, currentValue) {
			return accumulator += currentValue;
		});

		nArray = [nArray]; console.log(nArray);
		return (digitalRoot(nArray));
		
	
	}

	return nArray;
}

document.getElementById("output").innerHTML = digitalRoot(987685546);

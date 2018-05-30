/*Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*/

function SeriesSum(n) {
	for (var sum = 0, i = 0; i < n; i++) {
		sum += 1 / (1 + 3 * i);
	}
	return sum.toFixed(2);
}


document.getElementById("output").innerHTML = SeriesSum(4);

//Optional solution using reduce() and array

function SeriesSum2(n) {
	var denominator = 1;
	var array = [];
	for (i = 0; i < n; i++) {
    	array.push(1 / (1 + (3 * i)));
	}
	var result = array.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);
	return result.toFixed(2);
}

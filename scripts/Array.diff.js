/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3] */


function array_diff(a, b) {
	return a.filter(function(x) {return b.indexOf(x) == -1});
}

document.getElementById("output").innerHTML = array_diff([3, 4, 1, 9, 10], [0, 12, 4, 4, 1]); 
/*
//practice beyond this point....


const companies = [
	{name: "Compnay One", category: "Finance", start: 1981 , end: 2003},
	{name: "Compnay Two", category: "Retail", start: 1992, end: 2008},
	{name: "Compnay Three", category: "Auto", start: 1999, end: 2007},
	{name: "Compnay Four", category: "Retail", start: 1989, end: 2010},
];

const beyond2006Companies = companies.filter(company => company.end > 2006);

const ages = [33, 12, 20, 16, 5, 54, 21, 44];

const dead2008Companies = companies.filter(function (company){
	if (company.end === 2008)
		return true;
});

const agesInDogYears = ages.map(humanYears => humanYears * 7);
console.log(agesInDogYears);



for(let i = 0; i < companies.length; i++) {
	console.log(companies[i]);
} 

// for each 

companies.forEach(function(company){
	console.log(company); // or company.name etc...
});

filter

const canDrink = ages.filter(age => age >= 21); // get 21 and older
console.log(canDrink);

const retailCompanies = companies.filter(function (company) {
	if (company.category === 'Retail') 
		return true;
	}
);

const shortHandRetailCompanies = companies.filter(company => company.category === 'Retail');

const ninetiesCompanies = companies.filter(function (pickAName){
	if (pickAName.start >= 1990 && pickAName.start < 2000)
		return true;
});

const shortHandNinetiesCompanies = companies.filter(company => (company.start > 1989 && company.start < 2000));

console.log(beyond2006Companies);
*/
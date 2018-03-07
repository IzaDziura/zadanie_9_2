var femaleNames = ['Kasia', 'Ania', 'Asia', 'Marta'];
var maleNames =['Adam', 'Bartek', 'Kamil', 'Kuba'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} else {
	console.log("To imię już jest");
}

console.log(allNames);


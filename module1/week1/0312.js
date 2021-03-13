/**
 * Functions
 */

// FN Declaration
function myAge(age) {
  return age
}
console.log(myAge(33));


// FN EXPRESSION
const sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 4));

/**
 * 
 * ARROW FN
 * 
 */
const add = (a, b) => {
    console.log(a, b);
//   const n = a + 1;
//   return n + b;
};
console.log(add(2, 5));

// ARROW SHORT [ IMPLICIT VS EXPLICIT (sh)]
const multiply = (a, b) => a * b;
console.log(multiply(2, 2));

// No parenthesis, same goes for implicit
const divide = a => a / 2;
console.log(divide(10));

/**
 * Default parameters
 */
 const add2 = (a, b) => {
	const seta = a ? a : 5;
 	const setb = b ? b : 10;
	return seta + setb;
}
console.log(add(4));

const add2 = (a = 5, b = 10) => {
    return a + b;
};
console.log(add(2, 6))


//ARRAYS
const phAlph = ['alpha','bravo', 'charlie', 'delta', 'echo', 'delta'];
const numbers = [1, 2, 3, 4, 5, 6];

// get amount
console.log(phAlph.length);

// Loop through array
for (const value of phAlph) {
	console.log(value)
}

// one difference is that you move the function
// to a variabel 
phAlph.forEach(item => item);
const def2 = numbers.filter(nr => nr % 2 === 0);
// return new array
// expected output [2, 4, 6]


const multiply = numbers.map((num) => {
	return num * 2;
});
// expected output [2, 4, 6, 8, 10, 12]
// return new array

// Add to array
phAlph.push('foxtrot');
console.log(phAlph);

// remove from array
console.log(phAlph.slice(2));
// expected output: Array ["charlie", "delta", "echo", "delta"]
console.log(phAlph.slice(2, 4));
// expected output: // ["charlie", "delta"]

// return a boolean
const checkVal = phAlph.includes('charlie');

// remove first item of array
console.log(phAlph.shift()) // returns the removed item
console.log(phAlph)

// add to the front of array
phAlph.unshift(4, 5)
console.log(phAlph)

// merging two arrays
const numalph = phAlph.concat(numbers);
console.log('numalph',numalph);

const numalph2 = [...phAlph, numbers];
console.log('numalph2',numalph2);
/*
 *destructering
 */
 // instead of writing everything to a variable
 const al1 = phAlph[0];
 const al2 = phAlph[1];
 /* console.log(al1, al2); */
 
  // use destructure
 const [alph, ...rest] = def2;
 /* console.log(alph, rest) */
 
 
 const [width, height] = [100, 400];
 console.log(`${width} x ${height}`)

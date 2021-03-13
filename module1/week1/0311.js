var composername = "Ludwig";
console.log(composername);

composername = "Mozart";
console.log(composername);

let composername2 = "Ludwig";
console.log(composername2);

composername2 = "Mozart";
console.log(composername2);

const composername3 = "Ludwig";
console.log(composername3);

composername3 = "Mozart";
console.log(composername3);

function f() {
  var x = 1;
  let y = 2;
  const z = 3;
  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("x in block scope is", x);
    console.log("y in block scope is", y);
    console.log("z in block scope is", z);
  }
  console.log("x outside of block scope is", x);
  console.log("y outside of block scope is", y);
  console.log("z outside of block scope is", z);
}

f();

/**
 * Conditions
 */
const job = "df";
if (job) {
  console.log(job);
}

if (job === "composer") {
  console.log(job);
} else {
  console.log(" IETS ANDERS");
}

const jobType = job === "composer" ? "CORRECT" : "WRONG";
console.log(jobType);

const jobShow = job === "" && "MY JOB";
console.log(jobShow);

// LOOPS
const myNumbers = [1, 2, 3, 4, 5];

for (let i = 0; i < myNumbers.length; i++) {
  console.log("hallo", i);
  console.log(i * 2);
}
// hallo 0-4

for (const value of myNumbers) {
  console.log("hi", value);
}
// Hi 1-5

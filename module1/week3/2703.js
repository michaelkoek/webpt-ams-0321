const logmyName = (nm) => {
  console.log(nm); // []
};

logmyName([]);

const mycb = (personObj) => {
  const { name, age } = personObj;
  console.log(`${name} is ${age} years old`);
};

const fetchData = (refMyCb) => {
  setTimeout(() => {
    const myPerson = {
      name: "Bob",
      age: 12,
      city: "Haarlem",
    };
    refMyCb(myPerson);
  }, 3000);
};

const second = (refToFetching) => {
  refToFetching(mycb);
  // first() fnc
  // arg = mycb (fn ref)
  console.log("second hallo");
};

/* first(mycb); */

// first exc second(arg = (fn ref))
second(fetchData);

const arr = ["michael", "bob", 1, 2, 3, 4];
const arr2 = ["burger", "pizza"];

const person1 = arr[0];
const person2 = arr[1];

/* const [person1, person2, ...person] = arr; */

const myPerson = {
  name: "michael",
  age: 12,
  city: "Amsterdam",
  hobbie: "Computer",
  food: "pizza",
  phone: "mobile",
};

/* const name = myPerson.name; */

const { name, age } = myPerson;

/* console.log([...arr, ...arr2]) */

const isTrue =
  arr.length === 0
    ? "Yes is zero"
    : arr.length > 5
    ? "more than 5"
    : "less than 5";

console.log(isTrue);

const myFun2 = ({ hobbie, name }) => {
  // console.log(name, hobbie);
};
myFun2(myPerson);

function myFunc(poch1, poch2, ...poch3) {
  /* console.log(poch1, poch2);
	  console.log(poch3) */
}

myFunc(
  myPerson.name,
  myPerson.age,
  myPerson.city,
  myPerson.hobbie,
  myPerson.food,
  myPerson.phone
);
const time = "2h 22min".split(" ");

const [hour, min] = time;

console.log(parseInt(hour), parseInt(min));


let thriller = {
  name: "Thriller",
  type: "Pop",
  songs: 7,
  year: 1982,
};

let darkSide = {
  name: "The Dark side of the Moon",
  type: "Rock",
  songs: 10,
  year: 1973,
  address: {
      city: 'NY',
      say() {
          console.log(this.songs)
      }
  },
  play() {
    console.log(this.name + " album is playing");
  },
};

darkSide.address.say();

let satNFever = {
  name: "Saturday Night Fever",
  type: "Disco",
  songs: 8,
  year: 1977,
  play() {
    console.log(this.name + " album is playing");
  },
};

// CD
// 1 change property
satNFever.songs = 9;
// console.log(satNFever);

// 2 add property
satNFever.hasAward = true;
// console.log(satNFever);

// 3 add method -> this
satNFever.play();

const albums = [satNFever, darkSide];

const getList = (alb) => {
  return alb.map((item) => `the name of this album is: ${item.type}`);
};

console.log(getList(albums));

// exc on course platform

// Dating app
// 4 new
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person('john', 32);
  const person2 = new Person('wim', 16);
  console.log(person1, person2);
  

// 5 intro to class

// 6 extends
class MobilePhones {
	constructor(name, age, hobbies) {
  	this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  
  sayHello() {
  	console.log('hallo', this.name)
  }
 
  outPutHobbies() {
  	const arr = this.hobbies.map((item) => {
      return `I like ${item}`
    });
    /* const arr = 'i like ' + this.hobbies[0] */
  	console.log(arr)
  }
}

class Apple extends Profile {
	constructor(name, age, hobbies) {
  	super(name, age, hobbies);
    this.os = 'Apple';
  }
  
  sayHello() {
  	console.log('hallo', this.name)
  }
}

class Samsung extends Profile {
	constructor(name, age, hobbies, os) {
  	// avail: name, age, hobbies
  	super(name, age);
  }
  
  sayHello() {
  	console.log('Bye', this.name)
  }
}

const person1 = new iPhone('john', 32, ['hike', 'sports']);
const person2 = new Samsung('wim', 16, ['tea', 'tv']);
console.log(person1, person2);

person2.outPutHobbies();
person1.sayHello();
person2.sayBye();

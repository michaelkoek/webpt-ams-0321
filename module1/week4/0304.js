const solution = (str, end) => {
  console.log(str, end);
  const strArr = [...str].reverse();
  const endArr = end.split("").reverse();
  console.log(strArr);

  return endArr.every((chr, index) => {
    console.log(chr, strArr[index], chr === strArr[index]);
    return chr === strArr[index];
  });
};

solution("samurai", "ai");

// HTML:
// <p id="my-text">hello world</p>

const mypar = document.getElementById("my-text");
const mybtn = document.getElementsByClassName("btn");

// console.log(document.getElementById('my-text'))
console.log(mybtn);

function myFunction() {
  console.log("clicked on the btn");
  mypar.innerHTML = "bye everybody";
  mypar.className = "text__red";

  let node = document.createElement("LI"); // Create a <li> node
  let textnode = document.createTextNode("Water"); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  document.getElementById("myList").appendChild(node); // Append <li> to <ul> with id="myList"
}

const myPerson = {
  name: "Pocahontas",
};

myPerson.age = 22;
myPerson.country = "USA";

console.log(myPerson);

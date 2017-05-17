var result = document.querySelector('.arrow--result');
var result_message;


// USE = shorten an anon function
// +++++++++++++++++

let numbers = [1, 2, 3, 4, 5, 6];
// return a new array of doubled number
// let doubled = numbers.map(function(n){
//   return n * 2;
// });
let doubled = numbers.map( n => n * 2);

// result_message = doubled;
// result.innerHTML = doubled;


// USE in Objects +++++++++++++++++

// the fat arrow here would invoke the lexical scope (not the object)
// let person = {
//  name: "Paul",
//  sayName: () => {
//    result.innerHTML = `Hi I'm ${this.name}`;
//  }
// }

// short method code -
// drop the function keyword
//  let person = {
//  name: "Paul",
//  sayName() {
//    result.innerHTML = `Hi I'm ${this.name}`;
//  }
// }


// change the scope to lexical w/ a fat arrow
//  let person = {
//  name: "Paul",
//  hobbies: ["css", "beer", "cooking"],
//  showHobbies : function() {
//    let self = this;
//    this.hobbies.forEach(function(hobby) {
//      result.innerHTML +=
//      `${self.name} likes ${hobby} <br>`
//    });
//  }
// }

// remove the function keyword and add the arrow
let person = {
name: "Paul",
hobbies: ["css", "beer", "cooking"],
showHobbies : function() {
  let self = this;
  this.hobbies.forEach((hobby) => {
    result.innerHTML +=
    `${self.name} likes ${hobby} <br>`
  });
}
}


person.showHobbies();

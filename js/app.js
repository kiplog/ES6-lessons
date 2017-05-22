var result = document.querySelector('.result');
var result_message;

// stage one - emulate a class in JS (ES5)

function Plane(){
this.wings = 2;
this.speed = 100;
this.altitude = 0;
}

// ADDING TO THE OBJECT (CLASS)
// ClassName.prototype.methodName = function () {
//
// };

Plane.prototype.fly = function () {
  this.altitude = 3000;
};
const myPlane = new Plane();



function F_16() {
  this.speed = 1000;
}

F_16.prototype = new Plane();
const myF_16 = new F_16();

myPlane.fly();
result_message = myPlane.altitude;

result.innerHTML = result_message;
console.log(result_message);

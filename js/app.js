var result = document.querySelector('.result');
var result_message;

// stage one - emulate a class in JS

function Plane(){
this.wings = 2;
this.speed = 100;
this.altitude = 0;

}

const myPlane = new Plane();

result_message = myPlane.wings;




result.innerHTML = result_message;
console.log(result_message);

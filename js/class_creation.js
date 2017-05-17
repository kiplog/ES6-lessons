var result = document.querySelector('.result');
var result_message;

// stage one - create a class

class Plane {
  constructor(speed, passengers)  {
    this.wings = 2;
    this.speed = speed;
    this.passengers = passengers;
    this.alt = 0;
    this.location = {
      lon: 0,
      lat: 0
    };
  }
  fly(lon, lat, alt) {
    this.location.lat += lat;
    this.location.lon += lon;
    this.alt += alt;
  }
  static get flightCheck() {
    return 'ready to fly';
  }
}


class FighterJet extends Plane {
  constructor() {
    super();
    this.missiles = 6;
  }
}

// const myPlane = new Plane(100, 4);
// myPlane.fly(120.003, 300.301, 1000);


// how do we set parameters on extended classes?

// const myPlane = new FighterJet(1500, 1);

const myPlane = new Plane(1000, 4);

result_message = Plane.flightCheck;

result.innerHTML = result_message;
console.log(result_message);

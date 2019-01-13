//Function meant to be called in constructor mode.
function Bicycle(cadence, speed, gear,tyrePressure){
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tyrePressure = tyrePressure;
  this.inflateTyres = function(){
    this.tyrePressure += 3;
  };
}

// Calling the function in the cunstructor mode
var bicycle1 = new Bicycle(50,20,4,25);
bicycle1.inflateTyres();

var bicycle2 = new Bicycle(50,25,4,30);
bicycle2.inflateTyres();

function Mechanic(name){
  this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTyres = bicycle1.inflateTyres;

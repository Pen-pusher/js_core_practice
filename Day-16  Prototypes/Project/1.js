// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

/* //this one will put enerything in proto works fine aswell
function vehicle(driver, type = "car") {
  if(!(type=="car"|| type=="truck")) {
    console.log("type should be car or truck");
    return;
  }
  var obj = new Automobile();
  function Automobile() {
    this.driver = driver;
    this.speed = 0;
    if (type == "truck") this.cargo = [];
  }
  Automobile.prototype.drive = function (mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
  if (type == "truck") {
    Automobile.prototype.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };
    Automobile.prototype.unloadCargo = function() {
      return this.cargo.pop();
    }; 
  }
  return obj;
}
var car = vehicle("carWala");
var car = vehicle("truckWala","truck");
*/
var Vehicle = function (driver) {
  this.driver = driver;
  this.speed = 0;
  this.drive = function (mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
};
var car = new Vehicle("carwala");
// var Car = function (driver) {
//   this.driver = driver;
//   this.speed = 0;
//   this.drive = function (mph) {
//     this.speed = mph;
//     return this.driver + ' driving at ' + mph + ' miles per hour';
//   };
// };
let truck = new Vehicle("truckwala");
passTruck(truck);

function passTruck(obj) {
  obj.cargo = [];
  obj.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this;
  };


  obj.unloadCargo = function () {
    return this.cargo.pop();
  };

}
// var Truck = function (driver) {
//   this.driver = driver;
//   this.speed = 0;
//   this.cargo = [];
//   this.drive = function (mph) {
//     this.speed = mph;
//     return this.driver + ' driving at ' + mph + ' miles per hour';
//   };

//   this.loadCargo = function (cargo) {
//     this.cargo.push(cargo);
//     return this;
//   };

//   this.unloadCargo = function () {
//     return this.cargo.pop();
//   };
// };



// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.
function ObjectTecher(name) {
  this.name = name;
}
ObjectTecher.prototype.teach = function (subj) {
  console.log(`${this.name} teaches ${subj}`);
}
"use strict";

var myFunction = function myFunction() {
  return "say hello";
};
console.log(myFunction());
var returnCarModel = function returnCarModel() {
  return {
    model: 'Fusion',
    brand: 'Ford'
  };
};
console.log(returnCarModel());
var car = {
  velocity: 40,
  acceleration: function acceleration() {
    this.velocity += 10;
  },
  break: function _break() {
    this.velocity -= 10;
  }
};
car.break();
car.acceleration();
car.acceleration();
console.log(car.velocity);
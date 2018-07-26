const _ = require("lodash");

const Rat = function(name){
  this.name = name;
}

Rat.prototype.touchFood = function(food){
  food.poisonLevel += 1;
}

module.exports = Rat;

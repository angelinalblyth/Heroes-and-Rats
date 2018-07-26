const _ = require("lodash");

const Food = function(name, replenishmentLevel) {
  this.name = name;
  this.replenishmentLevel = replenishmentLevel;
  this.poisonLevel = 0;
}

module.exports = Food;

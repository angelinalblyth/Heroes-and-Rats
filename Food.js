const _ = require("lodash");

const Food = function(name, replenishmentLevel) {
  this.name = name;
  this.replenishmentLevel = replenishmentLevel;
}

module.exports = Food;

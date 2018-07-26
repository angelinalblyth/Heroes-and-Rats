const assert = require("assert");
const Food = require("../food.js");

describe("Food", function(){
  let food;

  beforeEach(function(){
    food = new Food("Baked Beans", 5);

  })

  it('should have name', function(){
    assert.deepStrictEqual(food.name, "Baked Beans")
  })

  it('should have replenishment level', function(){
    assert.deepStrictEqual(food.replenishmentLevel, 5)
  })
})

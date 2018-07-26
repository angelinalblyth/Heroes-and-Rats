const assert = require("assert");
const Rat = require("../rat.js");
const Food = require("../food.js");

describe("Rat", function(){

  let rat;
  let food;

  beforeEach(function(){
    rat = new Rat("Mickey")
    food = new Food("Baked Beans", 5);
  })

it('rat poisons food', function(){
  rat.touchFood(food);
  assert.deepStrictEqual(food.poisonLevel, 1);
})



})

const assert = require("assert");
const Hero = require("../hero.js");
const Food = require("../Food.js");
const Task = require("../Task.js");

describe("Hero", function(){

  let hero1;
  let food;
  let crisps;
  let task1;
  let task2;

  beforeEach(function(){
    hero1 = new Hero("Superman", "Crisps");
    food = new Food("Baked Beans", 5);
    crisps = new Food("Crisps", 6);
    task1 = new Task(1, 3, 500);
    task2 = new Task(3, 1, 500);
  })

  it("Hero has a name", function(){
    assert.deepStrictEqual(hero1.name, "Superman");
  });

  it("Hero has health", function(){
    assert.deepStrictEqual(hero1.health, 100);
  })

  it("Hero has favourite food", function(){
    assert.deepStrictEqual(hero1.favouriteFood, "Crisps")
  })

  it("Hero can say their name", function(){
    const expected = "My name is Superman"
    assert.deepStrictEqual(hero1.talk(), expected);
  })

  it("Hero has a empty collection of tasks", function(){
    assert.deepStrictEqual(hero1.tasks, []);
  })

  it("can add task", function(){
    hero1.addTask(task1);
    assert.deepStrictEqual(hero1.tasks, [task1]);
  })

  it('should loose health', function(){
    hero1.looseHealth();
    assert.deepStrictEqual(hero1.health, 90)
  })

  it('should can eat', function(){
    hero1.looseHealth();
    hero1.eat(food);
    assert.deepStrictEqual(hero1.health, 95)
  })

  it('should get food bonus', function(){
    hero1.looseHealth();
    hero1.looseHealth();
    hero1.eat(crisps);
    assert.deepStrictEqual(hero1.health, 89)
  })

  it('sort task by urgency', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    const expected = [task2, task1];
    const actual = hero1.sortTask("urgencyLevel");
    assert.deepStrictEqual(actual, expected);
  })

  it('sort task by difficulty', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    const expected = [task1, task2];
    const actual = hero1.sortTask("difficultyLevel");
    assert.deepStrictEqual(actual, expected);
  })

  it("mark task as complete", function(){
    hero1.addTask(task1);
    hero1.completeTask(task1);
    const expected = hero1.tasks[0].completed;
    assert.deepStrictEqual(true, expected);

  })

  it('can view completed tasks', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.completeTask(task1);
    const expected = [task1];
    assert.deepStrictEqual(hero1.tasksComplete(), expected);
  })


})

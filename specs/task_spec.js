const assert = require("assert");
const Task = require("../task.js");

describe("Task", function(){

  let task1, task2;

  beforeEach(function(){
    task1 = new Task(1, 3, 500);
    task2 = new Task(3, 1, 500);
  })

  it("Task has difficulty level", function(){
    assert.deepStrictEqual(task1.difficultyLevel, 1);
  })

  it("Task has urgency level", function(){
    assert.deepStrictEqual(task1.urgencyLevel, 3);
  })

  it("Task has a reward", function(){
    assert.deepStrictEqual(task1.reward, 500);
  })

  it("Task is not complete", function(){
    assert.deepStrictEqual(task1.completed, false);
  })

  it("Task is complete", function(){
    task1.taskCompleted()
    assert.deepStrictEqual(task1.completed, true);
  })

});

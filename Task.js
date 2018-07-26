const _ = require("lodash");

const Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = false;
}

Task.prototype.taskCompleted = function () {
  this.completed = true;
};


module.exports = Task;

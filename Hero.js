const _ = require("lodash");

const Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return ("My name is " + this.name);
};

Hero.prototype.looseHealth = function () {
  this.health -= 10;
}

Hero.prototype.eat = function (food) {
  if(this.favouriteFood === food.name){
    food.replenishmentLevel = food.replenishmentLevel * 1.5;
  }
  if(food.poisonLevel > 0){
    this.health -= food.poisonLevel
  }
  if(food.poisonLevel === 0){
  this.health += food.replenishmentLevel;
  }



  //
  // if(this.favouriteFood === food.name){
  //   food.replenishmentLevel = food.replenishmentLevel * 1.5;
  // }
  // this.health += food.replenishmentLevel;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.sortTask = function (property) {
  return _.sortBy(this.tasks, property);
};

Hero.prototype.completeTask = function(task){
  task.taskCompleted();
}

Hero.prototype.tasksComplete = function(){
  return  _.filter(this.tasks, {completed: true})
}

module.exports = Hero;

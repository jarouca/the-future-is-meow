var Felid = require('./Felid');

var HouseCat = function(name, favoriteFood, ownerName) {
  Felid.call(this, name, favoriteFood);
  this.ownerName = ownerName;
};

HouseCat.prototype = Object.create(Felid.prototype);
HouseCat.prototype.constructor = HouseCat;

HouseCat.prototype.huntForFood = function() {
  return 'Goes to kitchen, knocks over bowl containing ' + this.favoriteFood + ' and eats it from the floor';
};

HouseCat.prototype.showAffectionToOwner = function() {
  return 'Brings dead mouse to ' + this.ownerName;
};

module.exports = HouseCat;

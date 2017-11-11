var Felid = function(name, favoriteFood) {
  this.name = name;
  this.favoriteFood = favoriteFood;
};

Felid.prototype.groom = function() {
  return 'Licks its coat';
};

module.exports = Felid;

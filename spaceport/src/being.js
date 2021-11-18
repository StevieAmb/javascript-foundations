class Being {
  constructor(being, species) {
    this.name = being;
    this.species = species;
    this.credits = 0;
    this.isAlive = true;
  }

  updateCredits(addedCredits) {
    this.credits += addedCredits;
  }
}

module.exports = Being;

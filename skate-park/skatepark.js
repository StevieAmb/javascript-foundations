class SkatePark {
  constructor(place) {
    this.name = place.name;
    this.yearFounded = place.year;
    this.style = place.type;
    this.features = place.features;
    this.isPrivate = place.isPrivate || false;
    this.cost = place.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if (!this.isPrivate && this.occupants.length <= 2) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (skater.money >= this.cost && this.occupants.length <= 2) {
      this.occupants.push(skater);
      skater.money = skater.money - this.cost;
      return `Welcome to Curbside, the cost will be $${this.cost}.00.`
    } else if (this.occupants.length <= 2) {
      return `Sorry, you don't have enough money.`
    } else {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
  }
}

module.exports = SkatePark;

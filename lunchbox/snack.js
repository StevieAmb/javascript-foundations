class Snack {
  constructor(snack) {
    this.deliciousLevel = 'extra';
    this.type = snack;
    this.amount = 100;
    this.isInLunchBox = false;
  }

  getEaten() {
    this.amount -= 10;
    if (this.amount <= 20) {
      this.cuttingItClose = true;
    } else {
      this.cuttingItClose = false;
    }
  }

  checkForHealthy() {
    if (this.type.includes('fruit') || this.type.includes('Fruit')) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Snack;

class LunchBox {
  constructor(lunchbox) {
    this.owner = lunchbox.owner;
    this.material = lunchbox.madeOf;
    this.color = lunchbox.color;
    this.shape = lunchbox.shape;
    this.snacks = [];
    this.healthySnack = [];
  }

  acquireSnack(fruitSnack) {
    this.snacks.push(fruitSnack);
    fruitSnack.isInLunchBox = true;

    if (fruitSnack.type.includes('fruit') ||          fruitSnack.type.includes('Fruit')) {
      this.healthySnack.push(fruitSnack.type);
    }
 }

  findHealthySnacks() {
     return this.healthySnack;
  }
}

//so, there's a function that checks whether
//a snack has the word fruit in it. If there's
//fruit in it, it reads true. Returns true is has
//fruit in it.

//this.type is the one that has the snack name.

//Goal: to get to identifying all the healthy snacks, so all the snacks that will return true if they have fruit in it.

module.exports = LunchBox;

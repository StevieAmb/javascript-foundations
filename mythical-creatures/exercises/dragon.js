class Dragon {
  constructor (name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.count = 0;
  }
  greet(rider) {
    return `Hi, ${this.rider}!`;
  }
  eat() {
   this.count = this.count + 1;
   if (this.count >= 3) {
     return this.hungry = false;
   }
 }
}

module.exports = Dragon;

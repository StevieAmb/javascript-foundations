class Vampire {
  constructor (name, pet) {
   this.name = name;
   this.thirsty = true;
   this.ouncesDrank = 0;
   if (pet === undefined) {
   this.pet = "bat";
 } else {
  this.pet = pet;
    }
  }
    drink() {
      this.thirsty = false
      if (this.ouncesDrank < 50) {
        this.ouncesDrank = this.ouncesDrank + 10;
      } else {
        return "I'm too full to drink anymore!"
      }
  }
}

module.exports = Vampire;

class Fairy {
  constructor(being) {
    this.name = being;
    this.dust = 10;
    this.disposition = "Good natured";
    this.humanWards = [];
    this.clothes = {
      dresses: ["Iris"],
    }

  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(array) {
    for (var i = 0; i < array.length; i++) {
    this.clothes.dresses.push(array[i]);
  }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant){
    var humanCounter;
    if (this.disposition === 'Vengeful') {
     infant.name = infant.name;
     infant.eyes = infant.eyes;
     infant.disposition = 'Malicious';
     this.humanWards.push(infant);
   }
   if (this.humanWards.length === 3) {
     this.disposition = 'Good natured';
   }
      return infant;
  }
}
//if humanwards.length has 3 people in it, the nature is changed,
//and after three is 4, so greater than three.
//any code after the return will not run, so code has to be before return
//





module.exports = Fairy;

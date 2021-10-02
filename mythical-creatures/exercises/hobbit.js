class Hobbit {
  constructor ({name: name}) {
  this.name = name;
  this.age = 0;
  this.adult = false
  this.old = false;
  }
  celebrateBirthday() {
    this.age ++;
    if (this.age >= 101) {
      this.adult = true;
      this.old = true;
    } else if (this.age < 101 && this.age > 32) {
      this.adult = true;
    }
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return 'Here is the ring!'
    } else {
      this.hasRing = false;
      return "You can't have it!"
    }
  }
}

module.exports = Hobbit;

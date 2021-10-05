//Things to remember about objects.

//To create one object, you can use the object literal

var rider = {
  name: 'Stevie',
};

//to create many types of the same object


class Centaur {
  constructor({name: name, type: type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.work = 0;
  }
  shootBow() {
    this.work = this.work + 1
    if ((this.cranky === false && this.work < 2) && (this.standing === true && this.layingDown === false)) {
    var shoot = 'Twang!!!'
    return shoot;
  } else {
    this.cranky = true;
    return 'NO!';
  }
  }

  run() {
    this.work = this.work + 1;
    if ((this.cranky === false && this.work < 2) && (this.standing === true && this.layingDown === false))  {
    var sound = 'Clop clop clop clop!!!';
    return sound;
  } else {
    this.cranky = true;
    return 'NO!';
  }

}
//should not be able to shoot or run whole laying down.
//should not be able to shoot or run, when this.layingDown is true
//and this.Standing up is false. When the conditions are changed for
//layingDown and standingUp, it should not be able to shoot

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else {
      this.cranky = false;
      this.work = 0;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.layingDown = true;
    this.standing = false;
  }
  standUp() {
   this.standing = true;
   this.layingDown = false;
 }
 drinkPotion() {
   if (this.standing === false && this.layingDown === true) {
   this.cranky = false;
   return 'Not while I\'m laying down!'
 } else {
   this.cranky = false;
 }
 }
}
//should not be cranky after drinking potion.
//should only be able to drink potion while standing

//After layingDown (which means layingDown is true, and standing is false)
//it should not be able to run or shoot. So after layngDown is called,
//when you call run or shoot, it should return NO!

//console.log(rider);

module.exports = Centaur;

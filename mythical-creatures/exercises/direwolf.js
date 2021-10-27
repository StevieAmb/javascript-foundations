

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.huntsWhiteWalkers = true;
    this.starksToProtect = [];
    if (home === undefined) {
    this.home = "Beyond the Wall";
    } else {
    this.home = home;
  }
  if (size === undefined) {
  this.size = 'Massive';
} else {
  this.size = size;
}

}

  protect (stark) {
   if (this.home === stark.location && this.starksToProtect.length < 2) {
  this.starksToProtect.push(stark)
  stark.safe = true;
  this.huntsWhiteWalkers = false;
   }
  }
  leave() {
    var abandonedStark = this.starksToProtect.pop();
    abandonedStark.safe = false;
  }
}






module.exports = Direwolf;

//should have a stark object pushed into the starksToProtect array.
//should be able to protect a stark when in the same locations
//should be able to call out both locations.
//to make them equal. And, should also be able to work, by default.

class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
    this.color = color;
   }
 }

 isWhite() {
   if (this.color !== "white") {
     return false;
   }
 }
 says(message) {
   return `**;* ${message} *;**`
 }
}


module.exports = Unicorn;


//1.Read the test that you are running.
//2. Ask yourself if it's going to fail and why?
//3.Run the test.
//4.Make it pass

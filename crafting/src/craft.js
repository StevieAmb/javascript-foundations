var Material = require("../src/material.js");

class Craft {
 constructor(craft) {
   this.name = craft.type;
   this.materials = craft.materials;
   this.completed = false;
 }
 completeCraft() {
   this.completed = true;
   return `All done! It looks great!`
 }
 calculateProjectTotal() {
   var sum = 0;
   for (var i = 0; i < this.materials.length; i++) {
     sum += this.materials[i].calculateMaterialCost();
   }
   return sum;
 }


}

module.exports = Craft;

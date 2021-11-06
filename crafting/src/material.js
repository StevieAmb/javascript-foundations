class Material {
 constructor(cloth, price, amount, units) {
  this.name = cloth;
  this.price = price;
  this.amount = amount
  this.units = units;
 }

 useMaterial(amtNeeded) {
   if (this.amount < amtNeeded) {
     return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
   } else {
    this.amount = this.amount - amtNeeded;
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
   }
 }

 calculateMaterialCost() {
   return this.price * this.amount;
 }
}


module.exports = Material;

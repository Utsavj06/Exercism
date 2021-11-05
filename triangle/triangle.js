//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
   // throw new Error('Remove this statement and implement this function');
      console.log(sides)
    this.sides = sides.sort();
    console.log(this.sides)
    this.value = this.sides[0] + this.sides[1] > this.sides[2];
    console.log(this.value)
  }

  get isEquilateral() {
    //throw new Error('Remove this statement and implement this function');
    return this.value && (this.sides[0] == this.sides[1]) && this.sides[0] == this.sides[2]
  }

  get isIsosceles() {
    //throw new Error('Remove this statement and implement this function');
    return this.value && (this.sides[0] == this.sides[1]) || this.sides[1] == this.sides[2]
  }

  get isScalene() {
    //throw new Error('Remove this statement and implement this function');
    return this.value && (this.sides[0] !== this.sides[1]) && this.sides[1] !== this.sides[2]
  }
}

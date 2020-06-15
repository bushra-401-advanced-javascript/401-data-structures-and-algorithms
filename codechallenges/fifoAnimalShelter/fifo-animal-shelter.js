'use strict';

class AnimalShelter {
  constructor() {
    //Array implementation
    this.shelter = new Array();
  }
  
  enqueue(animal) {
    //Accept only Animals that are cats or dogs
    switch(animal) {
    case 'cat':
    case 'Cat':
    case 'CAT':
    case 'dog':
    case 'Dog':
    case 'DOG':
      this.shelter.push(animal.toLowerCase());
      break;
    default:
      return 'Sorry! Only Cats & Dogs Are Allowed.';
    }
  }
  dequeue(pref) {
    //return the first preferred animal in the shelter
    if (this.shelter.length === 0) return 'The Shelter is Empyt :(';
    if (this.shelter[0] === pref.toLowerCase() ) {
      return this.shelter.shift();
    }
    else {
      return null;
    }
  }
}

module.exports = AnimalShelter;

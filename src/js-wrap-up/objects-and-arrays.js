const person = {
  name: 'Matt',
  age: 28,
  // greet: () => {
  //     console.log(`Hi, I am ${this.name}`); // this.name is undefined, this is bound to a global context
  // }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
};

person.greet();

const multitypes = ['Dave', 1, true, { test: 123 }]; // legal
const hobbies = ['Photography', 'Gym'];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map(hobby => hobby.toLocaleUpperCase()));
console.log(hobbies);

// updates an existing array, reference doesn't change, hence it is const
hobbies.push('Programming');
console.log(hobbies);

// copying and array
const copiedHobbies1 = hobbies.slice();
console.log(copiedHobbies1);

// spread operator
const copiedHobbies2 = [...hobbies, 'Spreading']; // same as for objects
console.log(copiedHobbies2);

// rest operator - merges multipe arguments into an array
const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4));

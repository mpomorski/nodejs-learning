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

const printPerson = ({ name }) => {
  console.log(name);
};

printPerson(person);

const { name: firstName, age } = person;
console.log(firstName, age);

const fruits = ['Apple', 'Orange'];
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

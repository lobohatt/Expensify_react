// Object Destructuring

console.log('destructuring');

const person = {
  name: 'lobo',
  age: 22,
  location: {
    city: 'chennai',
    temp: 34
  }
};

const {name,age} = person;
//const {city, temp} = person.location;
const {city, temp: temperature} = person.location;

console.log(`${name} is ${age}`);
console.log(`${city}`);
console.log(`${temperature}`);


// Array Destructuring



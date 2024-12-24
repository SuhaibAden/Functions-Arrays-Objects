// ==== Challenge 1: Writing Objects ====
const intern1 = {
  id: 1,
  name: "Mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F",
};

const intern2 = {
  id: 2,
  name: "Kennan",
  email: "kdiben1@tinypic.com",
  gender: "M",
  speak: function () {
    return `Hello, my name is ${this.name}!`;
  },
};

const intern3 = {
  id: 3,
  name: "Keven",
  email: "kmummery2@wikimedia.org",
  gender: "M",
};

const intern4 = {
  id: 4,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "M",
};

const intern5 = {
  id: 5,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F",
  multiplyNums: function (num1, num2) {
    return num1 * num2;
  },
};

// ==== Challenge 2: Reading Object Data ====
console.log(intern1.name); // Mitzi's name
console.log(intern2.id); // Kennan's ID
console.log(intern3.email); // Keven's email
console.log(intern4.name); // Gannie's name
console.log(intern5.gender); // Antonietta's Gender

// ==== Challenge 3: Object Methods ====
console.log(intern2.speak()); // "Hello, my name is Kennan!"
console.log(intern5.multiplyNums(3, 4)); // 12

// ==== Stretch Challenge: Nested Objects and the this keyword ====
const parent = {
  name: "Susan",
  age: 70,
  speak: function () {
    return `Hello, my name is ${this.name}!`;
  },
  child: {
    name: "George",
    age: 50,
    speak: function () {
      return `Hello, my name is ${this.name}!`;
    },
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function () {
        return `Hello, my name is ${this.name}!`;
      },
    },
  },
};

// Log the parent object's name
console.log(parent.name); // Susan

// Log the child's age
console.log(parent.child.age); // 50

// Log the name and age of the grandchild
console.log(`${parent.child.grandchild.name}, ${parent.child.grandchild.age}`); // Sam, 30

// Have the parent speak
console.log(parent.speak()); // "Hello, my name is Susan!"

// Have the child speak
console.log(parent.child.speak()); // "Hello, my name is George!"

// Have the grandchild speak
console.log(parent.child.grandchild.speak()); // "Hello, my name is Sam!"

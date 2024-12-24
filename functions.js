
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Multiply 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
/*

Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4)); // Example invocation: 3 * 4 = 12


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: Age in Cat years 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Do the following:
 1. Invoke the catYears function below and pass an age value to it
 2. Use the received value to calculate the age in cat years (1 human year is equal to 7 cat years)
 3. Return the newly calculated age
*/

function catYears(age) {
  return age * 7;
}

console.log(catYears(5)); // Example invocation: 5 human years = 35 cat years


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// ES5 to ES6 conversions:

// Original: function myFunction() { console.log("Function was invoked!"); };
// Converted:
const myFunction = () => {
  console.log("Function was invoked!");
};
myFunction();

// Original: let anotherFunction = function (param) { return param; };
// Converted:
const anotherFunction = param => param;
console.log(anotherFunction("Example"));

// Original: let add = function (param1, param2) { return param1 + param2; };
// Converted:
const add = (param1, param2) => param1 + param2;
console.log(add(1, 2));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

function game(user, computer) {
  if (user === computer) {
      return "it's a tie";
  } else if (
      (user === "Scissors" && computer === "Paper") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Rock" && computer === "Scissors")
  ) {
      return "you win!";
  } else {
      return "you lose!";
  }
}

// Example invocation:
const choices = ["Rock", "Paper", "Scissors"];
const computerChoice = choices[Math.floor(Math.random() * 3)];
console.log(game("Rock", computerChoice));


/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

function annoyingSong(startingNumber) {
  let result = "";
  for (let i = startingNumber; i > 0; i--) {
      result += `${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${
          i - 1
      } bottles of soda on the wall\n`;
  }
  return result;
}

// Example invocation:
console.log(annoyingSong(5));

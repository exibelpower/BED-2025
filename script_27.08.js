/* function begForSubs() {
  console.log("Hello!");
  console.log("Please like and subscribe!");
}

begForSubs();
begForSubs();
begForSubs();

 function functionName(parameter1, parameter2) {
  let value = "something";
  // do something
  return value;
}
console.log(functionName("argument1", "argument2"));
 

function sum(num1, num2) {
  console.log(num1 + num2);
}
function returnSum(num1, num2) {
  return num1 + num2;
}

sum(2, 4);

console.log(returnSum(10, 12));
 */

/* let num1 = 10;
let num2 = 12;
let result;
function dirtySum() {
  result = num1 + num2;
}
function pureSum(num1, num2) {
  return num1 + num2;
}

dirtySum();
console.log(result);
const x = pureSum(20, 20);
 */

/* function greetUser(name = "Ola") {
  alert("Welcome " + name + "!");
}
greetUser("Carl");
greetUser("Ola");
greetUser("Kari");
 */

/* function language(lang = "en") {
  switch (lang) {
    case "en":
      return "English website";
      break;

    case "no":
      return "Norwegian website";
    case "dk":
      return "Danish website";
    default:
      return "English website";
  }
}
console.log(language("no")); */

/* function arguments(...args) {
  console.log(args);
}
arguments(1, 2, 5, 6, 8, "Hello"); */

/* const input = Number(prompt("Guess a number between 1 and 10"));
if (input === parseInt(Math.random() * 10 + 1)) {
  alert("guessed correctly!");
} else {
  alert("Guessed wrong!");
}
 */

/* function getNumberFromUser() {
  const input = Number(prompt("Guess a number between 1 and 10"));
  return input;
}
function guessNumber(number, min, max) {
  const randomNumber = parseInt(Math.random() * max + min);
  console.log(randomNumber);
  if (number === randomNumber) {
    alert("Guessed correctly!");
  } else {
    alert("Guessed wrong!");
  }
}

const input = getNumberFromUser();
guessNumber(input, 1, 10); */

function isNumber(number) {
  if (typeof number === "number" && !isNaN(number)) {
    return true;
  } else {
    return false;
  }
}

function calculateDistanceTo(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return Math.sqrt(a ** 2 + b ** 2);
  }
  return false;
}

console.log(calculateDistanceTo(3, 4));
console.log(calculateDistanceTo(5, 7));
console.log(calculateDistanceTo(10, 12));
console.log(typeof 1);

const greetUser = function (name) {
  console.log("Hello " + name);
};
greetUser("Ola");

const greetUserArrow = (name) => {
  console.log("hello " + name);
};
greetUserArrow("Kari");

const button = document.querySelector("#btn");
console.log(button);
button.addEventListener("click", function () {
  console.log("NORMAL FUNCTION");
});

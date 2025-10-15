// How you just copy an array
/* const array = ["first", "second", "third"];

const copyOfArray = [...array];
array[0] = "Hello";
console.log(copyOfArray);
 */

/* function logAllEvenNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i] % 2;
    if (result === 0) {
      console.log(numbers[i], result);
    }
  }
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 12];

logAllEvenNumbers(numberArray);

numberArray.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
}); */

function returnEvenNumbers(numbers) {
  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      output.push(numbers[i]);
    }
  }
  return output;
}
const result = returnEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result);

//Array method
const arrayToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 443];
const filteredArray = arrayToFilter.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});
console.log(filteredArray);

/*  const students = [
  { name: "markus", age: 23 },
  { name: "Herman", age: 17 },
  { name: "Henrik", age: 32 },
  { name: "Ola", age: 12 },
];

const adultStudents = students.filter(function (student) {
  if (student.age >= 18) {
    return true;
  }
  return false;
});
console.log(adultStudents);
 */

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function numberDivisable(numbers, divider) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      output.push(numbers[i]);
    }
  }
  return output;
}

numberDivisable(numbersArray, 5);

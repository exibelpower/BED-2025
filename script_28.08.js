const array = ["first", "second", "third"];

// Log ut hvert element i arrayet på egen linje

// these blocks are "the same"
// block 1
/* for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
function log(name, number, age) {
  console.log("hei");
}
// block 2
array.forEach((element) => {
  console.log(element);
});
// block 3
array.forEach(function (item) {
  console.log(item);
});

function myAddEventListener(event, callbackFunction) {
  if (event === "click") {
    callbackFunction();
  } else if (event === "resize") {
    callbackFunction();
  }
}

window.addEventListener("click", () => {
  console.log("User clicked");
}); */

//BUTTON 1&2
/* const button1 = document.querySelector("#btn-1");
button1.addEventListener("click", () => {
  console.log("button 1 was clicked");
});

const button2 = document.querySelector("#btn-2");
button2.addEventListener("click", () => {
  console.log("button 2 was clicked");
}); */

// OBJECTS

/* const object = {
  key: "value",
  key2: "another value",
};

const student = {
  name: "Ola",
  dateOfBirth: "2000-01-01",
  "birth-date": "2000-01-01",
  course: "FED",
};

for (const key in student) {
  console.log(key, student[key]);
}
 */

const student = {
  name: "Adrian",
  course: "FED",
  isActive: true,
  changeCourse: function (course) {
    this.course = course;
  },
  changeName: function (name) {
    this.name = name;
  },
  swapActive: function () {
    this.isActive = !this.isActive;
  },
};
console.log(student.course);
student.changeCourse("BED");
console.log(student.course);
console.log(student.name);
student.changeName("Ola");
console.log(student.name);
console.log(student.isActive);
student.swapActive();
console.log(student.isActive);

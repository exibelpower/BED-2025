const car = {
  make: "Toyota",
  model: "Corolla",
  start: function () {
    console.log("Starting engine");
  },
  start2: () => {
    console.log("Starting car 2");
  },
  start3() {
    console.log("Starting car 3");
  },
};
console.log(car);

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log("Starting engine");
  }
}
const ferrari = new Car("Ferrari", "La Ferrari");
console.log(ferrari);
ferrari.start();

class ElectricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model);
    this.batteryCapacity = batteryCapacity;
  }
  charge() {
    console.log("Charging car");
  }
}

const tesla = new ElectricCar("Tesla", "S", 80);
console.log(tesla);
tesla.start();
tesla.charge();

class Animal {
  breathe() {
    console.log("😁");
  }
  eat() {
    console.log("😒");
  }
}

class Mammal extends Animal {
  produceMilk() {
    console.log("😂");
  }
  mood() {
    console.log("😠");
  }
}

class BlueWhale extends Mammal {
  swim() {
    console.log("🐬");
  }
}
class Human extends Mammal {
  depressed() {
    console.log("🧔");
  }
  mood() {
    console.log("😁");
  }
}
const whale = new BlueWhale();
const human = new Human();

human.mood();

const jsonData = `{
  "key": "values",
  "number": 2,
  "numbers": [1, 2, 3],
  "obj": {
    "key": "value"
  },
  "split-key": "value for split key"
}`;
console.log(jsonData);
const json = JSON.parse(jsonData);
console.log(json["split-key"]);

const carJson = JSON.stringify(car);
console.log(carJson);

//form
const localData = JSON.parse(localStorage.getItem("todo"));

let todo = [];

if (localData) {
  todo = localData;
}

const container = document.querySelector(".container");
const form = document.querySelector("form");
todo.forEach((item) => {
  createItem(item);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("#todo-input").value;
  todo.push(value);
  console.log(todo);
  container.innerHTML = "";
  todo.forEach((item) => {
    createItem(item);
  });
  const stringified = JSON.stringify(todo);
  localStorage.setItem("todo", stringified);
});

function createItem(item) {
  const p = document.createElement("p");
  p.innerText = item;
  container.append(p);
}

// creating data
const obj = {
  key: "value",
};
console.log(obj);
// stringifying the data, making it json so it can be sent/stored
const text = JSON.stringify(obj);
console.log(text);
// parsing the json text into a ""javaScript object" again so we can use it in our code
const newObject = JSON.parse(text);
console.log(newObject);

document.querySelector("#clear").addEventListener("click", () => {
  localStorage.clear();
  todo = [];
  container.innerHTML = "";
});

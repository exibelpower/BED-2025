let string = "This is a string";
console.log(string)

let number = 42;
console.log(number)

let boolean = true;
console.log(boolean)

console.log(10==10); // loosely equal
console.log(10===10); // strictly equal (Same datatype aswell)

console.log(5>10 && 3 > 10); // AND (both has to be equal for true)
console.log(5>10 || 3 > 10); // OR (one of them has to be true)

let temperature = 20;

if(temperature >= 20) { 
    console.log("Wear shorts");
} 
else {
    console.log("Wear pants");
}


let sober = true;
let age = 16;
let eats = true;
let withparent = true;

/*
if(
    (age >= 16 && sober) ||
    (eats == true && age >= 16 && sober == true) ||
    (withparent == true && age >= 13 && sober == true)
) {
    console.log("Take the beer");
} else {
    console.log("You're not old enough and you're too drunk you alchoholic!");
}
*/

if(age >=18 && sober) {
    console.log("Take the beer");
} else if(eats == true && age >= 16 && sober == true) {
    console.log("Take the beer young lad!");
} else if(withparent == true && age >= 13 && sober == true) {
    console.log("Take the beer with your parent");
} else {
    console.log("Get out of here");
}





let role = "ADMIN";

if (role == "ADMIN") {
    console.log("Give them the admin rights");
 }else if (role == "USER") {
    console.log("Display normal web page");
} else if (role == "BANNED") {
    console.log("They dont get access");
}

// UP, DOWN, LEFT, RIGHT
const key = "UP";

switch (key) {
    case "UP":
        console.log("UP WAS PRESSED");
        break;
    case "DOWN":
        console.log("DOWN WAS PRESSED");
        break;
    case "RIGHT":
        console.log("RIGHT WAS PRESSED");
        break;
    default:
        console.log("ILLEGAL KEY");
}


for (let index = 0; index < 10; index++) {
    console.log(index);
}
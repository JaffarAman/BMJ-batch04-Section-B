// console.log("hello world");

// document.write("HELLO CLASS <br />");

// var userName = prompt("Enter your name...");

// document.write("my name is " + userName);

// document.write("<h1>my name is" + " " + userName + "</h1>");

var fruit1 = "Apple";
var fruit2 = "Orange";
var fruit3 = "Mango";

////ARRAY///

// var fruits = ["apple", "orange", "mango"];
// alert(fruits[0])

// console.log(fruits[0]);

// var stdData = ["Jaffar", 21, undefined, true, null];
// console.log(stdData);

// var userName;

// var userInput = prompt("enter your name");

// if (userInput) {
//   userName = userInput;
// } else {
//   console.log("false");
//   userName = null;
// }

// console.log(userName);

// var string = "";

// // false

// if (string) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var name;
// name = "Jaffar Aman";
// console.log(name);

// var arr = [];
// console.log(arr);
// arr[5] = "JAFFAR";
// arr[1] = "AMAN";
// arr[2] = "TALHA";
// console.log(arr[0]);

// var arr = ["jaffar" , "aman" , "talha" , "a" , "b" , "c"]

// var arr = ["jaffar"];
// arr[0] =  "sir yousuf";
// console.log(arr);

// var cities = ["karachi", "lahore", "multan"];
// console.log(cities[2])

// removing and Adding elements //
// pop() , push()
// shift , unshift

// var cities = ["karachi", "lahore", "multan"];
// console.log("old array", cities);

///remove last element
// cities.pop()

// var cities = ["karachi", "lahore", "multan"];
// console.log(cities);

// cities.push("islamabad", "xzy", "abc", 12354, true);

// console.log(cities);

//shift , unshift
// var cities = ["karachi", "lahore", "multan"];
// console.log(cities);
// cities.shift();
// console.log(cities);

// var cities = ["karachi", "lahore", "multan"];
// console.log(cities);
// cities.unshift("xzy" , 12345);
// console.log(cities);

//slice ==> copy
///splice
// var cities = ["karachi", "lahore", "multan"];

// var arrCopy = cities.slice(1, 1);
// console.log(arrCopy);
// // .slice(0 , 2)

var cities = ["karachi", "lahore", "multan", "a", "b", "xyz"];

console.log(cities);

// cities.splice(2, 1);
// cities.splice(2, 1 , "jaffar");
cities.splice(2, 0, "jaffar");

console.log(cities);

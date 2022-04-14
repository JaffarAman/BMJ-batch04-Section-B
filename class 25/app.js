// console.log("hello class");

// var string = "Jaffar aman";
// console.log(string[5]);

// var para =
//   "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War.";

// console.log(para);

// for (var i = 0; i < para.length; i++) {
//   if (para.slice(i, i + 12) === "World War II") {
//     // console.log(i);
//     // console.log(para.slice(i + 12));
//     para = para.slice(0, i) + "Second World War" + para.slice(i + 12);
//   }
// }

// var para =
//   "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the World War II.";

// var indexNumber = para.indexOf("World War II");

// console.log(indexNumber);
// para =
//   para.slice(0, indexNumber) +
//   "Second World War" +
//   para.slice(indexNumber + 12);

// para = para.replace(/World War II/g, "Second World War");

// console.log(para);

// var name = "jaffar aman";
// // console.log(name.charAt(6));
// console.log(name.charCodeAt(1));

// var number = -25.25;

// // var round = Math.round(number);
// // var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// //floor , //ceil

// console.log(number);
// // console.log(round);
// // console.log(floor, "floor");
// console.log(ceil, "ceil");

// var random = Math.floor(Math.random() * 10) + 5;

// console.log(random);

// var number = parseInt(prompt("enter number"));
// console.log(typeof number, number);

// var num = parseFloat("40 80 10");

// console.log(num);

// var num = 2541;
// console.log(typeof String(num));

var number = (352 / 500) * 100;
console.log(number.toFixed(2));
// console.log(number.toFixed());

var value = "jaffar aman";
value = value.split(" ").reverse().join(" ");
console.log(value);

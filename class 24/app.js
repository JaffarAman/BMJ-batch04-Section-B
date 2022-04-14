// var userCity = prompt("Enter your city");
// console.log(userCity.toUpperCase());

// if (userCity.toUpperCase() === "KARACHI") {
//   alert("Welcome");
// } else {
//   alert("not found");
// }

// var userCity = prompt("enter city...").toLowerCase();
// var cities = ["lahore", "KARACHI", "islamabad", "multan"];

// var flag = false;

// for (var i = 0; i < cities.length; i++) {
//   if (userCity === cities[i].toLowerCase()) {
//     flag = true;
//     alert("WELCOME");
//     break;
//   } else {
//     alert("not found");
//   }
// }

// if (flag == false) {
//   alert("not found");
// }

// var word = prompt("enter name");
// // console.log(word[0]);

// var firstLetter = word.slice(0, 1).toUpperCase();
// var otherWord = word.slice(1).toLowerCase();

// var capWord = firstLetter + otherWord;

// console.log(capWord);

// var capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
// console.log(capWord);

// var userName = prompt("Enter your name");

// if (userName.length >= 3) {
//   alert("valid name");
// } else {
//   alert("invalid name");
// }

var para =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War.";

// for (var i = 0; i < para.length; i++) {
//   if (para.slice(i, i + 12) === "World War II") {
//     para = para.slice(0, i) + "the Second World War" + para.slice(i + 12);
//   }
// }

// console.log(para);

// var value = "jaffaR aman";
// console.log(value.lastIndexOf("a"));
// console.log(value.indexOf("jaffar"));

// var indexNumber = para.indexOf("World War II");
// console.log(indexNumber);

// if (indexNumber !== -1) {
//   para =
//     para.slice(0, indexNumber) +
//     "the Second World War" +
//     para.slice(indexNumber + 12);
// }
// console.log(para);


// charAt
// var para = "yousuf"
// var char = para.charAt(para.length - 1)
// console.log(char)


// var email = "yousuf@gmail.com"
// var email = prompt("Enter your email")
// var flag = 0
// for(var i = 0 ; i < email.length; i ++ ) {
//     if(email.charAt(i) === "@") {
//         console.log("This is a valid email")
//         flag = 1
//         break
//     }
// }
// if(flag == 0) {
//     console.log("This is not a valid email")
// }



// replace(  ,  )
// var para =
//   "The New Yorker magazine and doesn't allow and the phrase World War II. They say it should be and the Second World War.";
// console.log("Old Para => " , para)
// var newPara = para.replace("World War II" , "the Second World War")
// console.log("New Para => ", newPara)
// // var modifiedPara = newPara.replace("the Second World War", "World War II")
// var modifiedPara = newPara.replace(/the Second World War/g , "World War II")
// var modifiedPara = modifiedPara.replace(/and/g , "")
// console.log("New Para => ", modifiedPara)



/// rounding off
// var num = 13.1
// var roundOff = Math.round(1.443)
// console.log(roundOff)

// var ceil = Math.ceil(2.001)
// console.log(ceil);

// var floor = Math.floor(3.999)
// console.log(floor);
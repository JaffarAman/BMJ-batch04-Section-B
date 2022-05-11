// alert("hello world");

// var university = "University of Karachi";
// var arr = university.split("");
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i], "<br>");
// }

// var userName = "talha@";

// var flag = false;

// for (var i = 0; i < userName.length; i++) {
//   console.log(userName[i].charCodeAt());
//   if (
//     userName[i].charCodeAt() == 33 ||
//     userName[i].charCodeAt() == 44 ||
//     userName[i].charCodeAt() == 46 ||
//     userName[i].charCodeAt() == 64
//   ) {
//     flag = true;
//     alert("invalid username");
//   }
// }

// if (flag === false) {
//   alert("valid name");
// }

// var value = "35.36";
// var arr = value.split(".");

// var str = Number(arr.join(""));

// console.log(str);


// var myname = "jaffar aman";
// var arr = myname.split(" ").reverse().join(" ")
// console.log(arr)



//// Date ////

var currentDate = new Date()
console.log(currentDate);
// console.log(typeof currentDate);

// var strDate = String(currentDate)
// // var strDate = currentDate.toString()0
// console.log(strDate);
// console.log(typeof strDate);
// var month = strDate.slice(4, 7)
// console.log(month)

// var day = new Date().getDay()
// console.log(day)


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dayIndexNo = currentDate.getDay()
// console.log(days[dayIndexNo]);



var months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul" , "Aug", "Sep", "Oct", "Nov", "Dec"]
var monthIndexNo = currentDate.getMonth()
// console.log(months[monthIndexNo]);


var dateOfMonth = currentDate.getDate()
// console.log(dateOfMonth);



var currentYear = currentDate.getFullYear()
// console.log(currentYear);


var hours = currentDate.getHours()
// console.log(hours)


var minutes = currentDate.getMinutes()
// console.log(minutes)



var seconds = currentDate.getSeconds()
// console.log(seconds)



var milliSeconds = currentDate.getMilliseconds()
// console.log(milliSeconds)




var getTime = currentDate.getTime()
// console.log(getTime)

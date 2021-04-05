// A rendition of the FizzBuzz exercise.
// Display #'s from 100 - 200
// "Loopy" for divisible by 3
// "Lighthouse" for divisible by 4
// "LoopyLighthouse for both conditions satisfied"

// //Start by creating the loop
// for (let i = 100; i <= 200; i++) {
//   if((i % 3 === 0) && (i % 4 === 0)) {
// // First condition should be LoopyLighthouse as the loop will iterate in a problematic order otherwise
//     console.log("LoopyLighthouse");
//   } else if (i % 3 === 0) {
// // Once the first condition is complete, the other two can be added in any order.
//     console.log("Loopy");
//   } else if (i % 4 === 0) {
//     console.log("Lighthouse");
// // And console . log each digit that doesnt meet the above conditions
//   } else {
//     console.log(i);
//   }
// }

//Loopy 2:


function loopyLighthouse(range, multiples, words) {
//Start by creating the loop
for (let i = range[0]; i <= range[1]; i++) {
  if((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
// First condition should be LoopyLighthouse as the loop will iterate in a problematic order otherwise
    console.log(words[0] + words[1]);
  } else if (i % multiples[0] === 0) {
// Once the first condition is complete, the other two can be added in any order.
    console.log(words[0]);
  } else if (i % multiples[1] === 0) {
    console.log(words[1]);
// And console . log each digit that doesnt meet the above conditions
  } else {
    console.log(i);
  }
 }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
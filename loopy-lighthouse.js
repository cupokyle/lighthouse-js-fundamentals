// A rendition of the FizzBuzz exercise.
// Display #'s from 100 - 200
// "Loopy" for divisible by 3
// "Lighthouse" for divisible by 4
// "LoopyLighthouse for both conditions satisfied"

//Start by creating the loop
for (let i = 100; i <= 200; i++) {
  if((i % 3 === 0) && (i % 4 === 0)) {
// First condition should be LoopyLighthouse as the loop will iterate in a problematic order otherwise
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
// Once the first condition is complete, the other two can be added in any order.
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
// And console . log each digit that doesnt meet the above conditions
  } else {
    console.log(i);
  }
}
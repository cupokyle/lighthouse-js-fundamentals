function range(start, end, step) {
  const myArray = [];
  for (let i = start; i <= end; i += step) {
    if (start == undefined || step == undefined || end == undefined) {
      return myArray;
    } else if (start > end) {
      return myArray;
    } else if (step <= 0) {
      return myArray;
    } else {
      myArray.push(i);
    }
  }
  return myArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, -3));
function howManyHundreds(num) {
  let counter = 0;
  for(let i = num; i >= 100; i -= 100) {
    counter++;
  }
  return counter;
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
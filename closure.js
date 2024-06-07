// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown() {
  // write your code here
}

// const countingDown = countdown();

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

//  my answer

1. function countdown() {
   let count = 10;
  return function() {
    const currentCount = count;
    count--;
    return currentCount;
  };
}
const countingDown = countdown();
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());


2.function countdown(start, step) {
  let count = start;
  return function() {
    const currentCount = count;
    count -= step;
    return currentCount;
  };
}
const countingDown = countdown(10, 1);
console.log(countingDown());
console.log(countingDown()); 
console.log(countingDown()); 
console.log(countingDown()); 

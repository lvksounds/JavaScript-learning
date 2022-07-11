/*
The reduce method
Returns a single value after iterating throuth the elementos of array, thereby reducing the array.
*/

// exemple;

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summedNums);

/*
- Numbers is an array that contains numbers.
- summedNums is a variable that stores the returned value of invoking .reduce() on numbers. 
- numbers.reduce() calls the reduce method on the numbers array and takes in a callback functions as argument

- the callback function has two parameters, "accumulator" and "currentValue". The value of acumulattor atrats off as the value of the first element in the array and the currentVlaue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.

- As .reduce() iterates through the array, the return value of the callback function becmoes the accumulator value for the next iteration, currentValue takes on the value in the loop process
*/

/* 
The reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!).
*/

// example:

const numbers2 = [1, 2, 4, 10];

const summedNums2 = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); //<- Second argument for .reduce()

console.log(summedNums2); // output 117

// pratice:

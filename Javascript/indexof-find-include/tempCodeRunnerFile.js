// 2.) bina arrow function ke karo

// let total = prices.reduce(function(accumulator, currentValue){
// return accumulator+currentValue
// });
// console.log(total)

// Q2: Find largest number

// let nums = [25, 12, 89, 42];
// let max = nums.reduce(function (acc, curr) {
//     if (acc > curr) {
//         return acc
//     }
//     else {
//         return curr
//     }
// });
// console.log(max); // Output: 89


// Q3: Find smallest number

// let nums = [25, 12, 89, 42];
// let min = nums.reduce(function(acc,curr){
//     if(acc<curr){
//         return acc;
//     }else{
//         return curr;
//     }
// });
// console.log(min); // Output: 12

// Q4: multiply all numbers with reduce()

// let Multiply = nums.reduce(function(acc,curr){
//   return acc*curr
// });
// console.log(Multiply); output: 1121400

// Q5: Count how many times each element appears

let fruits = ["apple", "mango", "apple", "banana", "apple", "mango"];

let count = fruits.reduce(function(acc,fruit){
     if(acc[fruit]){
         acc[fruit]++
     }else{
        acc[fruit]=1
     }
     return acc
    },{});
    console.log(count)
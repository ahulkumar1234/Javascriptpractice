// ✅ 4.) Most Used Array Methods

// Method	            Kya karta hai (Simple Hindi)	                           Example

// push()	            Last mein add karta hai	                                  arr.push(5)
// pop()	            Last se hatata hai	                                      arr.pop()
// shift()	            First se hatata hai	                                      arr.shift()
// unshift()            First mein add karta hai	                              arr.unshift(0)
// map()	            Naya array banata hai	                                  arr.map(x => x*2)
// filter()	            Condition ke basis pe data return karta hai	              arr.filter(x => x > 2)
// reduce()	            Sabko mila kar ek value banata hai	                      arr.reduce((a,b) => a+b)
// find()	            Pehla match return karta hai	                          find(x => x > 5)
// includes()           Check karta hai element present hai ya nahi	              arr.includes(3)
// indexOf()            Position batata hai	                                      arr.indexOf(3)
// sort()	            Sort karta hai	                                          arr.sort()
// reverse()            Ulta karta hai	                                          arr.reverse()
// concat()	            2 arrays jodta hai	                                      arr1.concat(arr2)
// slice()	            Part copy karta hai	                                      arr.slice(1,3)
// splice()	            Add/remove karta hai array ke beech mein	              arr.splice(1, 1)




//----------------------------Practice Questions --------------------------------

// let numbers = [5, 10, 15, 20, 25]
// 1.) Push karo ek number
// 2.) Pop karo ek number
// 3.) For loop se print karo sabhi elements
// 4.) Check karo includes(10) ka result


//let numbers = [5, 10, 15, 20, 25]

//numbers.push(30); // last mai add ho gaya: [5, 10, 15, 20, 25, 30]
//numbers.pop(); // Last element (30) remove ho gaya. Array: [5, 10, 15, 20, 25]
//numbers.unshift(80); // start mai add ho gaya: [80, 5, 10, 15, 20, 25, 30]
//numbers.shift(); // start element (80) remove ho gaya. Array: [5, 10, 15, 20, 25]
//console.log(numbers); //Array print ho gaya [5, 10, 15, 20, 25]

// for(let chacha = 0; chacha < numbers.length; chacha++){
//     console.log(numbers[chacha]); // chacha = index hai array ka
// }

// for (const chacha of numbers) {
//     console.log(chacha)
// }

// numbers.forEach(chacha => {
//     console.log(chacha)
// });

// let res = numbers.includes(10);
// console.log(res);    //Output: True ayega kyuki array mai [10] hai



//----------------------------Practice Questions --------------------------------



// 1.) Ek array banao let marks = [35, 55, 65, 75]
// 2.) includes() se check karo 55 hai ya nahi
// 3.) indexOf() se 75 ka index nikalo
// 4.) find() se pehla number dhoondo jo 60 se bada ho

// let marks = [35, 55, 65, 75]

// console.log(marks.includes(55));
// console.log(marks.indexOf(75));


// let result = marks.find(function(marks){
//     return marks > 60
// });
//  console.log(result);  //output: 65


// ✅includes: Sirf check karta hai ki element array mein hai ya nahi, 📌 Return: true / false (boolean)
// let nums = [10, 20, 30];
// console.log(nums.includes(20));  true
// console.log(nums.includes(50));  false

// ✅find: Jab tu koi condition ke basis par value dhoondhna chahta hai , 📌 Return: Pehla value jo condition satisfy kare 📌Agar na mile: undefined
// let nums = [10, 20, 30, 40];
// let found = nums.find(function(num) {
//     return num > 25;
// });
// console.log(found); // 30

// ✅indexof: Check karta hai element ka index kya hai (position), 📌 Agar nahi mila toh -1 deta hai.
// let nums = [10, 20, 30];
// console.log(nums.indexOf(20));  1
// console.log(nums.indexOf(50));  -1


//  ---------------------------------------------------------------------------

// | Method     | Return Kya Karta Hai          | Kitne Items deta hai? |
// | ---------- | ----------------------------- | --------------------- |
// | `find()`   | Pehla matching value          | **Sirf 1**            |
// | `filter()` | Saare matching values (array) | **Multiple**          |


// ✅filter: filter() array ke saare matching elements ko naya array bana ke return karta hai.
// Ye un values ko filter karta hai jo condition ko satisfy karti hain.

// let ages = [15, 22, 18, 30, 12, 25];

// console.log(ages.filter(function(age){
//     return age >= 18;
// }));
// console.log(result); // output: [ 22, 18, 30, 25 ]


//----------------------------Practice Questions --------------------------------

// Question 1: sirf 50 se upar wale score print karo
// let scores = [45, 89, 67, 32, 99];

// let result = scores.filter((score) => {
//     return score > 50
// });
// console.log(result);

// Question 2: sirf wo names print karo jo 'R' se start hote hain
// let names = ["Rahul", "Raj", "Rani", "Ritik"];

// let result = names.filter((name)=>{
//     return name.startsWith("R");
// });
// console.log(result);

// Question 3: filter karo odd numbers (jo 2 se divide nahi hote)
// let numbers = [2, 4, 6, 7, 9, 10, 13];

// let result = numbers.filter(function(num){
// return num % 2 ==! 0
// });

// console.log(result);

// Question 4: empty strings hata do, sirf filled items print karo
// let items = ["pen", "", "pencil", "", "notebook"];

// let result = items.filter((item)=>{
// return item !== ""
// });
// console.log(result);

// ✅ map: Array ke har element par operation karta hai, Aur ek naya array return karta hai, Original array change nahi hota

// let numbers = [1, 2, 3, 4, 5];

// let Multiply = numbers.map(function(num){
// return num * 5
// });
// console.log(Multiply) output [ 5, 10, 15, 20, 25 ]

//----------------------------Practice Questions --------------------------------

// 1.) Sirf wo names capital letters mein banao jo 'r' se start hote hain

// let names = ["rahul", "ravi", "sita", "radha"];

// let result = names.filter((name) => {  // Normal function
//     return name.startsWith("r")

// }).map((name) => {
//     return name.toUpperCase();
// });

// let result = names
//   .filter(name => name.startsWith("r")) // Arrow function
//   .map(name => name.toUpperCase());

// console.log(result);  // ["RAHUL", "RAVI", "RADHA"]

// 2.) Har price par 18% GST lagao aur final prices ka array banao

// let prices = [100, 200, 300];
// let result = prices.map((gst)=>{  // Normal function
//    return gst + gst * 0.18
// });
// console.log(result)
// let result = prices.map(gst => gst+(gst*0.18))  // Arrow function
// console.log(result)


// ✅ reduce: reduce() array ke saare elements ko ek hi value mein convert kar deta hai — step-by-step process karke.
// => accumulator: Total hota jaa raha value (pehle 0 hota hai by default)
// => currentValue: Abhi jis element pe loop hai
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100 → Final Output ✅

// let numbers = [10, 20, 30, 40];
// let total = numbers.reduce((accumulator ,currentValue)=>{
//      return accumulator + currentValue
// });
// console.log(total); // Output: 100

//----------------------------Practice Questions --------------------------------

// 1.) reduce() ka use karke total bill nikalo

// let prices = [100, 200, 300, 150];
// let total = prices.reduce((accumulator , currentValue)=>{
//     return accumulator + currentValue
// });
// console.log(total) // output 750

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

// let fruits = ["apple", "mango", "apple", "banana", "apple", "mango"];

// let count = fruits.reduce(function(acc,fruit){
//      if(acc[fruit]){
//          acc[fruit]++
//      }else{
//         acc[fruit]=1
//      }
//      return acc
// },{});
// console.log(count)  output: { apple: 3, mango: 2, banana: 1 }



// ✅ Difference: every() vs some()
//      Feature	                   every()                       some()

// Sabhi true chahiye?	         ✅ Haan	              ❌ Nahi, ek bhi chalega
// Return type	                 true / false	           true / false
// Use case	                     All valid?	               Any one valid?


//----------------------------Practice Questions --------------------------------

// 1.) Check if all numbers are > 100

// let nums = [10, 20, 30, 40];

// let result = nums.every(function(num){
// return num > 100
// });
// console.log(result) output: false


// 2.) // Check if any number is > 35

// let nums = [10, 20, 30, 40];

// let res = nums.some(function(num){
// return num > 35
// });
// console.log(res);  output: true



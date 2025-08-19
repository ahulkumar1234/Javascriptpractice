✅ Most Used Array Methods


Method	            Kya karta hai (Simple Hindi)	                           Example

push()	            Last mein add karta hai	                                  arr.push(5)
pop()	            Last se hatata hai	                                      arr.pop()
shift()	            First se hatata hai	                                      arr.shift()
unshift()            First mein add karta hai	                              arr.unshift(0)
map()	            Naya array banata hai	                                  arr.map(x => x*2)
filter()	            Condition ke basis pe data return karta hai	              arr.filter(x => x > 2)
reduce()	            Sabko mila kar ek value banata hai	                      arr.reduce((a,b) => a+b)
find()	            Pehla match return karta hai	                          find(x => x > 5)
includes()           Check karta hai element present hai ya nahi	              arr.includes(3)
indexOf()            Position batata hai	                                      arr.indexOf(3)
sort()	            Sort karta hai	                                          arr.sort()
reverse()            Ulta karta hai	                                          arr.reverse()
concat()	            2 arrays jodta hai	                                      arr1.concat(arr2)
slice()	            Part copy karta hai	                                      arr.slice(1,3)
splice()	            Add/remove karta hai array ke beech mein	              arr.splice(1, 1)




----------------------------Practice Questions --------------------------------

let numbers = [5, 10, 15, 20, 25]
1.) Push karo ek number
2.) Pop karo ek number
3.) For loop se print karo sabhi elements
4.) Check karo includes(10) ka result


let numbers = [5, 10, 15, 20, 25]

numbers.push(30); // last mai add ho gaya: [5, 10, 15, 20, 25, 30]
numbers.pop(); // Last element (30) remove ho gaya. Array: [5, 10, 15, 20, 25]
numbers.unshift(80); // start mai add ho gaya: [80, 5, 10, 15, 20, 25, 30]
numbers.shift(); // start element (80) remove ho gaya. Array: [5, 10, 15, 20, 25]
console.log(numbers); //Array print ho gaya [5, 10, 15, 20, 25]

for(let chacha = 0; chacha < numbers.length; chacha++){
    console.log(numbers[chacha]); // chacha = index hai array ka
}

for (const chacha of numbers) {
    console.log(chacha)
}

numbers.forEach(chacha => {
    console.log(chacha)
});

let res = numbers.includes(10);
console.log(res);    //Output: True ayega kyuki array mai [10] hai



----------------------------Practice Questions --------------------------------



1.) Ek array banao let marks = [35, 55, 65, 75]
2.) includes() se check karo 55 hai ya nahi
3.) indexOf() se 75 ka index nikalo
4.) find() se pehla number dhoondo jo 60 se bada ho

let marks = [35, 55, 65, 75]

console.log(marks.includes(55));
console.log(marks.indexOf(75));


let result = marks.find(function(marks){
    return marks > 60
});
 console.log(result);  //output: 65


✅includes: Sirf check karta hai ki element array mein hai ya nahi, 📌 Return: true / false (boolean)
let nums = [10, 20, 30];
console.log(nums.includes(20));  true
console.log(nums.includes(50));  false

✅find: Jab tu koi condition ke basis par value dhoondhna chahta hai , 📌 Return: Pehla value jo condition satisfy kare 📌Agar na mile: undefined
let nums = [10, 20, 30, 40];
let found = nums.find(function(num) {
    return num > 25;
});
console.log(found); // 30

✅indexof: Check karta hai element ka index kya hai (position), 📌 Agar nahi mila toh -1 deta hai.
let nums = [10, 20, 30];
console.log(nums.indexOf(20));  1
console.log(nums.indexOf(50));  -1


 ---------------------------------------------------------------------------

| Method     | Return Kya Karta Hai          | Kitne Items deta hai? |
| ---------- | ----------------------------- | --------------------- |
| `find()`   | Pehla matching value          | **Sirf 1**            |
| `filter()` | Saare matching values (array) | **Multiple**          |


✅filter: filter() array ke saare matching elements ko naya array bana ke return karta hai.
Ye un values ko filter karta hai jo condition ko satisfy karti hain.

let ages = [15, 22, 18, 30, 12, 25];

console.log(ages.filter(function(age){
    return age >= 18;
}));
console.log(result); // output: [ 22, 18, 30, 25 ]


----------------------------Practice Questions --------------------------------

Question 1: sirf 50 se upar wale score print karo
let scores = [45, 89, 67, 32, 99];

let result = scores.filter((score) => {
    return score > 50
});
console.log(result);

Question 2: sirf wo names print karo jo 'R' se start hote hain
let names = ["Rahul", "Raj", "Rani", "Ritik"];

let result = names.filter((name)=>{
    return name.startsWith("R");
});
console.log(result);

Question 3: filter karo odd numbers (jo 2 se divide nahi hote)
let numbers = [2, 4, 6, 7, 9, 10, 13];

let result = numbers.filter(function(num){
return num % 2 ==! 0
});

console.log(result);

Question 4: empty strings hata do, sirf filled items print karo
let items = ["pen", "", "pencil", "", "notebook"];

let result = items.filter((item)=>{
return item !== ""
});
console.log(result);

✅ map: Array ke har element par operation karta hai, Aur ek naya array return karta hai, Original array change nahi hota

let numbers = [1, 2, 3, 4, 5];

let Multiply = numbers.map(function(num){
return num * 5
});
console.log(Multiply) output [ 5, 10, 15, 20, 25 ]

----------------------------Practice Questions --------------------------------

1.) Sirf wo names capital letters mein banao jo 'r' se start hote hain

let names = ["rahul", "ravi", "sita", "radha"];

let result = names.filter((name) =>{  // Normal function
    return name.startsWith("r")
}).map((name) => {
    return name.toUpperCase();
});

let result = names
  .filter(name => name.startsWith("r")) // Arrow function
  .map(name => name.toUpperCase());

console.log(result);  // ["RAHUL", "RAVI", "RADHA"]

2.) Har price par 18% GST lagao aur final prices ka array banao

let prices = [100, 200, 300];
let result = prices.map((gst)=>{  // Normal function
   return gst + gst * 0.18
});
console.log(result)
let result = prices.map(gst => gst+(gst*0.18))  // Arrow function
console.log(result)


✅ reduce: reduce() array ke saare elements ko ek hi value mein convert kar deta hai — step-by-step process karke.
=> accumulator: Total hota jaa raha value (pehle 0 hota hai by default)
=> currentValue: Abhi jis element pe loop hai
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100 → Final Output ✅

let numbers = [10, 20, 30, 40];
let total = numbers.reduce((accumulator ,currentValue)=>{
     return accumulator + currentValue
});
console.log(total); // Output: 100

----------------------------Practice Questions --------------------------------

1.) reduce() ka use karke total bill nikalo

let prices = [100, 200, 300, 150];
let total = prices.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue
});
console.log(total) // output 750

2.) bina arrow function ke karo

let total = prices.reduce(function(accumulator, currentValue){
return accumulator+currentValue
});
console.log(total)

Q2: Find largest number

let nums = [25, 12, 89, 42];
let max = nums.reduce(function (acc, curr) {
    if (acc > curr) {
        return acc
    }
    else {
        return curr
    }
});
console.log(max); // Output: 89


Q3: Find smallest number

let nums = [25, 12, 89, 42];
let min = nums.reduce(function(acc,curr){
    if(acc<curr){
        return acc;
    }else{
        return curr;
    }
});
console.log(min); // Output: 12

Q4: multiply all numbers with reduce()

let Multiply = nums.reduce(function(acc,curr){
  return acc*curr
});
console.log(Multiply); output: 1121400

Q5: Count how many times each element appears

let fruits = ["apple", "mango", "apple", "banana", "apple", "mango"];

let count = fruits.reduce(function(acc,fruit){
     if(acc[fruit]){
         acc[fruit]++
     }else{
        acc[fruit]=1
     }
     return acc
},{});
console.log(count)  output: { apple: 3, mango: 2, banana: 1 }



✅ Difference: every() vs some()
     Feature	                   every()                       some()

Sabhi true chahiye?	         ✅ Haan	              ❌ Nahi, ek bhi chalega
Return type	                 true / false	           true / false
Use case	                     All valid?	               Any one valid?


----------------------------Practice Questions --------------------------------

1.) Check if all numbers are > 100

let nums = [10, 20, 30, 40];

let result = nums.every(function(num){
return num > 100
});
console.log(result) output: false


2.) // Check if any number is > 35

let nums = [10, 20, 30, 40];

let res = nums.some(function(num){
return num > 35
});
console.log(res);  output: true

✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
JavaScript String Methods (Most Important)
Method	               Kya karta hai?

length	               String ki length deta hai
toUpperCase()	       Sabko capital letters mein convert karta hai
toLowerCase()	       Sabko small letters mein convert karta hai
trim()	               Aage-peeche ke space hata deta hai
includes()	           Check karta hai word/matter string mein hai ya nahi
startsWith()	           Check karta hai string kis se start ho raha hai
endsWith()	           Check karta hai string kis se end ho raha hai
indexOf()	           Ek word ka pehla position batata hai
slice(start,end)	       Part cut karta hai string ka
replace()	           Ek word ko doosre se replace karta hai
split()	               String ko array mein tod deta hai example = "rahul kumar" -> ["rahul","kumar"] and rahul.split("")=['r','a','h','u','l']
join()                  wapas word banata  rahul.join("")=["rahul"]

let names = "rahul"
console.log(names.split("").join(""));

✅ What is an Object in JavaScript?
Object ek aisi cheez hoti hai jisme key-value pairs hote hain.


----------------------------Practice Questions --------------------------------


 Q1: Count how many properties have number value

let data = {
    name: "Rahul",
    age: 22,
    marks: 85,
    passed: true
};
let count = 0
for (const key in data) {
    if (typeof data[key] === "number") {
        count ++;
    }
}
console.log(count)

Q2: Create a new object that only includes string values

let data = {
  name: "Rahul",
  age: 22,
  city: "Delhi",
  isStudent: true
};

let newdata = {}  //blank object banaya

for (const key in data) {
    if(typeof data[key] === "string"){  //condition check : agar data{} mai string items hai to
        newdata[key]=data[key]          // data ke string items ko newdata{} mai daal do
    }
}
console.log(newdata) // print karwa diya

Q3: Sum all number values in an object

let scores = {
  math: 80,
  english: 75,
  science: 90,
  name: "Rahul"
};
let sum = 0
for (const key in scores) {
   if(typeof scores[key]==="number"){
    sum = sum+scores[key]
   }
}
console.log(sum)


Q4: Reverse key-value pairs

let original = {
  name: "Rahul",
  city: "Delhi"
};
let reversed = {}
for (const key in original) {
    reversed[original[key]]=key
}
console.log(reversed)


Q5: Count how many boolean values in an object

let data = {
  name: "Ravi",
  isActive: true,
  isAdmin: false,
  score: 90,
};
let count = 0
for (const key in data) {
    if (typeof data[key] === "boolean"){
       console.log(key , data[key])
       count++
    }
}
console.log(count)

Q6. Count how many keys are there

let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2020,
};
let count = 0
for (const key in car) {
    count++
}
console.log("Total Keys :",count)

✅ Nested objects

let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2020,
  location:{
    city : "jamshedpur",
    state : "jharkhand",
  },
};
let car2 = JSON.parse(JSON.stringify(car)) //📌It is called Deep clone using JSON.stringify (ye string mai convert kar deta hai)JSON.parse wapas real form main convert kar deta hai, ye nested object ho tabhi use kiya jata hai..,otherwise(spread operator{...car})📌
car2.location.city = "ranchi"
console.log(car2)
console.log(car)

----------------------------Practice Questions --------------------------------

 1.) Add & Delete

let book = {
  title: "Atomic Habits",
  author: "James Clear"
};

book.pages = 320; // Adding new property
delete book.author; // Deleting property

console.log(book);

2.) Create a nested object for a college student with these fields:
name, roll, course (inside course: name, duration, fee)

let student = {
  name : "Rahul",
  roll: "02",
  course :{
    name: "MCA",
    duration: " two years",
    fee : "two lakh",
  },
};

console.log(student.course.fee) // two lakh


✅ What is Array of Objects?
Ek array ke andar multiple objects hote hain.
🧠 Real-life Example:
Student list, Product list, Employee records — sabhi array of objects hote hain.


----------------------------Practice Questions --------------------------------

1.) Print all students names

let Students = [
  {name : "rahul",roll: "02"},
  {name : "anjali",roll: "03"},
  {name : "priya",roll: "04"},
];
for (const Student of Students) {
  console.log(Student.name);
};

2.) Print the name of the highest paid employee

let employees = [
  { name: "Ravi", salary: 25000 },
  { name: "Anu", salary: 30000 },
  { name: "Kiran", salary: 28000 }
];
console.log(employees[1].salary);


✅ What are Methods in Objects?
🧠 Jab object ke andar koi function hota hai, usse hum method kehte hain.

let person = {
  name: "Rahul",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet(); // Output: Hello, my name is Rahul

🔍Explanation:
📌 greet ek method hai (kyunki ye object ke andar function hai)
📌 this.name ka matlab hai: object ke andar jo (name) key hai uski value
📌 this = current object (yani person)

----------------------------Practice Questions --------------------------------

 Practice Question 1

let car ={
  name : "Tata Harrier",
  start (){
    console.log(this.name + " is Starting")
  }
}
car.start();

 Practice Question 2 calculate the average 

let student = {
  name : "Rahul",
  marks : [50,60,80,90],
  total (){
    let sum = 0;
    for (let mark of this.marks) {
      sum += mark;
    }
    return sum / this.marks.length;
  }
};
console.log("Average : " + student.total());



✅ JSON – Kya Hota Hai?
JSON ka full form hota hai:
📄 JavaScript Object Notation
Ye ek data format hai jo JavaScript object jaisa dikhta hai, lekin text/string format me hota hai.
{
  "name": "Rahul",
  "age": 22,
  "skills": ["HTML", "CSS", "JavaScript"]
}
JSON Rules 🔴	Description
✅ Keys & values both inside double quotes	
✅ Valid types: string, number, array, object, boolean, null	
❌ No comments allowed	
❌ No functions or methods

✅ Why JSON is Useful?
           Use	                                 Example

📡 Data share via API	                  From backend to frontend
💾 Store data	                            In files like .json
🌐 Used in almost every web app	          Zomato, Amazon, etc.
🔄 Easily converted into JS object	           JSON.parse()



📌✅ What is async and await?
Ye dono JavaScript me Promises ko asaani se handle karne ke liye aate hain.

🔁 Pehle hum .then() laga ke chain banate the — ab uske jagah async/await se code clean aur readable ho jata hai.

💡 1-Line Explanation:
📌async ➡ function ko promise-returning banata hai
📌await ➡ kisi bhi promise ka result ka wait karta hai (line-by-line execution hota hai), Promise ka result aane tak rukega
⚠️ await sirf async function ke andar chalega

📌async - Function ke aage lagate hain — iska matlab: “andar await chalayega”
📌await - Sirf us cheez pe lagta hai jo Promise return karti hai — jiske aane me time lagta hai (async kaam)
Examples:👇

let res = await fetch("https://api.example.com");  📌 // fetch ek Promise return karta hai
let data = await res.json();  // res.json() bhi Promise return karta hai

async function getData() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data mil gaya ✅"), 2000);
  });
  let result = await promise; // Jab tak promise resolve nahi hota, yahan ruk jaayega
  console.log(result);        // Output: Data mil gaya 
}
getData();

⚠️ await sirf async function ke andar chalega
Examples:👇

❌ Error dega:
let res = await fetch("https://api.example.com");

// ✅ Sahi tarika:
async function fetchData() {
  let res = await fetch("https://api.example.com");
  console.log(res);
}

async function getData() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random")
  let data = await response.json();
  console.log(data.message)
}
getData();


✅🔴 Fetch API – Kya hota hai?
👉 Jab hum kisi server (ya API) se data chahte hain (jaise weather info, user list, etc.), toh hum fetch() ka use karte hain.
🧠 Simple Words Mein:
fetch() – Data lene ka kaam karta hai.
.then() – Jab response mil jata hai, toh yeh usko process karta hai.
.json() – Response ko readable JSON format mein convert karta hai.
.catch() – Agar koi error aaye, toh yeh usko pakadta hai.

🧠 Ab line-by-line samjho:
fetch("URL")
➤ Server ko bolta hai: "bhai mujhe data do"

.then(response => response.json())
➤ Jab data mil gaya, use readable format (JSON) mein convert karo

.then(data => { console.log(data) })
➤ Ab data ka use karo (jaise screen pe dikhana)

.catch(error => console.log("Error:", error))
➤ Agar koi galti ho jaaye, toh pakad lena

🔎👉 .message ya .content kya hai?
Yeh dono JSON object ke andar ke property names hote hain.

Jab bhi hum fetch().then(res => res.json()) karte hain,
toh humein ek JavaScript object milta hai JSON ke form mein.
Us object ke andar key-value pair hote hain.


fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    console.log("Dog Image URL:", data);
  })
  .catch(err => {
    console.log("Kuch gadbad ho gayi:", err);
  });

<--------------------------------------------------------->

fetch("https://official-joke-api.appspot.com/jokes/random")
.then(response => response.json())
.then(data => {
  console.log("Setup:", data.setup);
  console.log("Punchline:", data.punchline);
});


----------------------------Practice Questions --------------------------------

1.) ek async function banao jo 3 second baad console me "Hello, Rahul!" likhe

let fun = async () => {
  await setTimeout(() => {
    console.log("Hello Rahul");
  }, 3000)
};

fun()

2.) ek function banao jo ek number lega aur 1 second me uska double return kare // async/await ka use karke 5 ka double print karo

async function double() {
  setTimeout(()=>{
       console.log(5+5)
  },1000)
}
double ()

3.) Convert .then() to async/await

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => console.log(data));

  //converted code
  async function change() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json();
    console.log(data)
  }
  change ()

4.) is API se random dog image fetch karo // aur image tag me show karo (async/await ka use karke)

let img = document.querySelector("#dogpics");
let bttn = document.querySelector("button");
async function dogimg() {
  try{
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  console.log(data.message); 
  img.src = data.message;
  bttn.addEventListener("click",dogimg)
  }catch (error ){
     console.log("Error aa gaya", error);
  }   
}

dogimg();

5.) yeh API se ek joke lao (setup + punchline) HTML me display karo

let head = document.createElement("h2");
let para = document.createElement("p");
let btnn = document.createElement("button")

async function joke() {
  try {
  let respons = await fetch ("https://official-joke-api.appspot.com/jokes/random");
  let dataa = await respons.json();
  console.log(dataa.setup);
  console.log(dataa.punchline);

  head.textContent= dataa.setup
  para.textContent = dataa.punchline
  btnn.addEventListener("click",joke)
  document.body.appendChild(head)
  document.body.appendChild(para)
  document.body.appendChild(btnn).innerText = "Click for random jokes";
  } catch(Error){
    console.log("Error hai", Error)
  }
}

joke();


6.) // Dog API aur Joke API dono ko ek sath fetch karo // aur dono ka data ek hi time me show karo (Promise.all + async/await)

let image = document.createElement("img");
let heading = document.createElement("h3");
let paragraph = document.createElement("p");
let Button = document.createElement("button");
document.body.appendChild(Button).innerText = "Click"


let kutta = async () => {
  let [dogres,jokeres] = await Promise.all ([
   fetch ("https://dog.ceo/api/breeds/image/random"),
   fetch ("https://official-joke-api.appspot.com/jokes/random")
]);

let [dogdabba , jokedabba ] = await Promise.all ([
  dogres.json(),
  jokeres.json()
])

  image.src = dogdabba.message
  document.body.appendChild(image)

  
  heading.textContent = jokedabba.setup
  paragraph.textContent = jokedabba.punchline

  document.body.appendChild(heading)
  document.body.appendChild(paragraph)

}
 Button.addEventListener("click",kutta)
kutta()




✅ scope kya hota hai?
ek variable ko kaha tak acces (use) kar sakte hai
Types :-
functional scope - function ke andar hi use hoga
global scope - pure code mai kahi bhi use ho sakta hai
block scope - {} curly braces mai hi use ho sakta hai


✅ Execution context kya hai?
Jab JavaScript kisi code ko run (execute) karta hai, toh wo ek environment banata hai jisme code ka pura process chalta hai. Is environment ko hi Execution Context kehte hain.

🔄 2 Phases in Execution Context:

| Phase                        | Kaam                                                            |
| ---------------------------- | --------------------------------------------------------------- |
| 1. **Memory Creation Phase** | Variables/functions ko memory milti hai (undefined ya hoisting) |
| 2. **Code Execution Phase**  | Actual values assign hoti hain aur code run hota hai            |


✅ clousers - ek funtion hota hai jo kisi parent function ke andar hota hai or parent function usko return kar raha ho or wo parent functionn ka variable use kar raha ho
Example code of clousers :
function abcd(){
    let a = 0;
    return function(){
        if( a < 5 ){
            console.log(a)
            a++
        }
        else{
            console.error("limit khatam")
        }
    }
}
let fnc = abcd(); 👉 // clousers print karne ke liye usko phle ek variable mai save karna padta hai
fnc();


----------------------------------------OOPS in Javascript----------------------------------------


function Car (brand, price, color,model){
    this.brand = brand
    this.price = price
    this.model = model
    this.color = color
}

let Car1 = new Car ("toyota","1 lakh","Fortuner","white");
let Car2 = new Car ("Tata","1 lakh","Harrier","black");

console.log(Car1)
console.log(Car2)

class is blueprint to create something 
Example = Bank ( diffent account holders but same bank )
class car {
    constructor (name,brand,price){ 
        this.name= name
        this.brand=brand
        this.price=price
    }
}

let car1 = new car("nano","Tata","1 Lakh")
console.log(car1);



🔥 JavaScript Execution Model

JavaScript ka execution model samajhna bahut zaroori hai, kyunki isse humein pata chalta hai ki code kaise run hota hai aur asynchronous tasks kaise handle hote hain.
✅ 1.) JavaScript Single Threaded hai
👉 Matlab ek hi time pe ek kaam (call stack) chal sakta hai.
👉 Agar long task chal gaya to baaki ruk jaayega.

✅ 2.) Tasks ke 2 Queue hote hain:
🔄 1. Macrotask Queue
Ye bade tasks ke liye hota hai (delayed work).
Example: setTimeout, setInterval, setImmediate, DOM events, I/O.
Macrotask queue me tasks ko store kiya jaata hai, jab call stack khali hota hai tab ye tasks run hote hain.
Macrotask queue se ek task uthaya jaata hai aur call stack me daala jaata hai.

🔄 2. Microtask Queue
Ye chhote aur priority high wale tasks ke liye hota hai.
Example: Promise.then, async/await continuation, queueMicrotask.
Microtask queue me tasks ko store kiya jaata hai, ye hamesha call stack ke baad run hote hain.

👉 Microtask queue se sabse pehle tasks uthaye jaate hain, phir macrotask queue se.
👉 Agar microtask queue me kuch tasks hain, to call stack khali hone ke baad unhe run kiya jaata hai.
👉 Agar microtask queue empty ho gayi, tab macrotask queue se ek task uthaya jaata hai.

✅ 3.) Event Loop ka Rule
👉 Call stack (synchronous code) sabse pehle execute hota hai.
👉 Fir microtask queue check hoti hai → agar kuch hai to wo sabse pehle run hota hai.
👉 Agar microtask empty ho gayi to fir macrotask queue se ek task uthaya jaata hai.
👉 Repeat repeat repeat…


🔥 Example 1: Microtask vs Macrotask

console.log("Start");

setTimeout(() => console.log("Macrotask - setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask - Promise.then"));

console.log("End");


👉 Output:                             
Start
End
Microtask - Promise.then
Macrotask - setTimeout

👉 Reason:

Synchronous code → "Start", "End"
Microtask (Promise.then) → "Microtask - Promise.then"
Macrotask (setTimeout) → "Macrotask - setTimeout"
👉 Iska matlab hai ki microtasks hamesha pehle execute hote hain, phir macrotasks.

🔥 Example 2: Multiple Promises

console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask 1");
});

Promise.resolve().then(() => {
    console.log("Microtask 2");
});

console.log("End");

👉 Output: 
Start
End
Microtask 1
Microtask 2

👉 Reason: Microtasks hamesha order of creation me execute hote hain.


🔥 Example 3: Mixed

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

👉 Output:
A
D
C
B

👉 Reason:
Synchronous code → "A", "D"
Microtask (Promise.then) → "C"
Macrotask (setTimeout) → "B" 
👉( Ye interview ka favorite hai 😅)

👉 Ek Line Me Yaad Rakho:
Synchronous > Microtask > Macrotask
Har tick (iteration) me pehle microtask khatam karni hai, tabhi macrotask start hogi.

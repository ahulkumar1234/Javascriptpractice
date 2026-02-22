# 🚀 JavaScript Cheat Sheet + Practice Guide

### A complete collection of most used JavaScript concepts – Arrays, Strings, Objects, Async/Await, Event Loop, OOPs and more – with easy Hindi + English explanations and code.


---

# 📌 Array Methods

## let numbers = [5, 10, 15, 20, 25];

```numbers.push(30);   // [5, 10, 15, 20, 25, 30]```

```numbers.pop();      // [5, 10, 15, 20, 25]```

```console.log(numbers.includes(10)); // true```

Method	Kya karta hai (Simple Hindi)	Example Code

- push()	Last me add karta hai	arr.push(5)
- pop()	Last se hatata hai	arr.pop()
- shift()	First se hatata hai	arr.shift()
- unshift()	First me add karta hai	arr.unshift(0)
- map()	Har element par operation, new array return	arr.map(x => x*2)
- filter()	Condition ke basis par naya array banata hai	arr.filter(x => x>2)
- reduce()	Sabko mila kar ek value banata hai	arr.reduce((a,b)=>a+b)
- find()	Pehla matching value deta hai	arr.find(x=>x>5)
- includes()	Check karta hai element present hai ya nahi	arr.includes(3)
- indexOf()	Position batata hai (not found = -1)	arr.indexOf(3)
- sort()	Elements ko sort karta hai	arr.sort()
- reverse()	Ulta kar deta hai	arr.reverse()
- concat()	2 arrays ko jodta hai	arr1.concat(arr2)
- slice()	Part copy karta hai (non-destructive)	arr.slice(1,3)
- splice()	Add/remove karta hai array ke beech me	arr.splice(1,1)



---

# 📌 String Methods

## let str = "  Hello Rahul  ";
```console.log(str.trim().toUpperCase()); // "HELLO RAHUL"```

Method	Kya karta hai?

- length	String ki length deta hai
- toUpperCase()	Capital letters me convert
- toLowerCase()	Small letters me convert
- trim()	Extra spaces hata deta hai
- includes()	Word hai ya nahi check karta hai
- startsWith()	Check karta hai kis se start hota hai
- endsWith()	Check karta hai kis se end hota hai
- indexOf()	Word ka index deta hai
- slice()	Part cut karta hai
- replace()	Replace karta hai
- split()	String ko array banata hai
- join()	Array ko string banata hai


---

# 📌 Objects in JavaScript
```json
let student = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
};
```console.log(student.name); // Rahul```

Nested Objects

let car = {
  brand: "Toyota",
  location: {
    city: "Jamshedpur",
    state: "Jharkhand"
  }
};
```console.log(car.location.city); // Jamshedpur```

```
---

# 📌 Array of Objects
```
let employees = [
  { name: "Ravi", salary: 25000 },
  { name: "Anu", salary: 30000 },
  { name: "Kiran", salary: 28000 }
];

let maxSalary = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, 0);
console.log(maxSalary); // 30000

```
---

# 📌 Methods in Objects
```
let person = {
  name: "Rahul",
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet();
```

---

# 📌 JSON
```json
{
  "name": "Rahul",
  "age": 22,
  "skills": ["HTML", "CSS", "JavaScript"]
}

✅ Convert JSON → JS Object:

let obj = JSON.parse('{"name":"Rahul"}');

✅ Convert JS Object → JSON:

let str = JSON.stringify({name: "Rahul"});

```
---

# 📌 Async / Await & Fetch API
```
async function getData() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  console.log(data.message);
}
getData();

👉 await = wait for Promise result 👉 async = allows use of await inside function

```
---

# 📌 Event Loop (Microtask vs Macrotask)
```
console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("End");

✅ Output:

Start
End
Microtask
Macrotask

👉 Order: Synchronous > Microtask > Macrotask

```
---

# 📌 OOPs in JavaScript
```
Constructor Function

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
let car1 = new Car("Tata", "Harrier");
console.log(car1);

Class Syntax

class Car {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }
}

let car1 = new Car("Nano", "Tata", "1 Lakh");
console.log(car1);
```

---

# 📌 Closures
```
function counter() {
  let count = 0;
  return function () {
    if (count < 5) console.log(count++);
    else console.log("Limit reached");
  };
}

let fn = counter();
fn(); // 0
fn(); // 1
```

---

# 📝 Final Notes
```
Practice with all array methods

Master objects & array of objects

Understand event loop order

Use async/await for clean code

Learn OOPs (classes & constructors) for structure

```

---

# 🔥 This repo can be your all-in-one JS reference + practice guide.


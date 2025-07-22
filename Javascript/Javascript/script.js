// let body = document.querySelector("body");
// body.addEventListener("click", function () {
//     document.body.classList.toggle("body")
// });

// let para = document.createElement("p");
// para.textContent = "This is my para text"
// document.body.appendChild(para);

// let heading = document.createElement("h1");
// heading.textContent = "My Heading";
// document.body.appendChild(heading)

// let btn = document.createElement("button")
// btn.innerHTML = "click me";
// document.body.appendChild(btn);

// btn.className = "mybtn"  // add class

// let image = document.createElement("img")
// image.src = "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
// document.body.appendChild(image)

// //---------------------------- mousemove----------------------------- //


let mouse = document.querySelector(".dot");
let scndmouse = document.querySelector(".scnddot");

window.addEventListener("mousemove", function (dets) {
    mouse.style.top = dets.clientY + "px";
    mouse.style.left = dets.clientX + "px";

    scndmouse.style.top = dets.clientY + "px";
    scndmouse.style.left = dets.clientX + "px";
});


//---------------------------- keyup keydown----------------------------- //


// let text = document.querySelector("h1");

// document.addEventListener("keyup", function (dets) {
//     if (dets.key === " ") {
//         text.textContent = "SPC";
//     } else if (dets.key === "Backspace") {
//         text.textContent = " ";
//     }
//     else {
//         text.textContent = dets.key;
//     }
// });


//---------------------------- change event ----------------------------- //


// let inpbtnn = document.querySelector(".inpbtn");
// let fileinp = document.querySelector(".file");

// inpbtnn.addEventListener("click", function () {
//     fileinp.click();
// });

// fileinp.addEventListener("change", function (dets) {
//     inpbtnn.textContent = dets.target.files[0].name;
// });



//----------------------------form submit----------------------------- //

// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input");
// let main = document.querySelector(".main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     card.appendChild(profile);
//     console.log(card);

//     let img = document.createElement("img");
//     img.setAttribute("src", inp[0].value);

//     let h2 = document.createElement("h2");
//     h2.textContent = inp[1].value;

//     let h6 = document.createElement("h6");
//     h6.textContent = inp[2].value;

//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h2);
//     card.appendChild(h6)


//     main.appendChild(card);

//     inp.forEach(function (input) {
//         if(input.type !== "submit"){
//             input.value = "";
//         }
//     })

// });

//----------------------------------Event bubbling-----------------------------

// agar kisi pe event laga hua nahi hai to wo apne parent pe check karta hai event hai ya nahi

//----------------------------------Event capturing-----------------------------

//event bubbling ka opposite






/*----------------------------------Form validation---------------------------*/



// let email = document.querySelector("#email");
// let pass = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);

//     isvalid = true;

//     if (!emailans) {
//         document.querySelector("#emailerror").textContent = "Incorrect Email"
//         isvalid = false;
//     }
//     if (!passwordans) {
//         document.querySelector("#passerror").textContent = "Incorrect password"
//         isvalid = false;
//     }
//     if(isvalid){
//         document.querySelector("#Message").textContent = "Login successfull"
//     }

// });


/*----------------------------------To-Do List---------------------------*/



const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "deleteBtn";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = ""; 
});


// Event Delegation => Event Delegation is a technique in JavaScript where instead of attaching an event listener to each child element, you attach a single listener to a parent element, and use it to handle events from its child elements

// document.getElementById("myList").addEventListener("click", function(e) {
//   if (e.target.tagName === "LI") {
//     alert("You clicked: " + e.target.textContent);
//   }
// });


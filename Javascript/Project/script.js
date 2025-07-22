//--------------------------setTimeout--------------------------------//

// let head = document.querySelector("h1");
// let dabba = document.querySelector(".container")

// let starttimer = function () {

//     let count = 10;
//     // let step = 2;
//     let timer = setInterval(() => {
//         head.textContent = count;
//         count--
//         // count = count-step;
//         if (count === 0) {
//             head.textContent = "Times up";
//             head.style.color = "red"
//             clearInterval(timer)
//             setTimeout(starttimer, 2000)
//         }
//         else {
//             head.textContent = count
//             head.style.color = "black"
//         }

//     }, 1000);
// }
// starttimer()

// let body = setInterval(() => {
//     document.appendChild("dabba")
// }, 1000);



let taskinp = document.querySelector("input");
let addbtn = document.querySelector("button");
let main = document.querySelector(".container");

addbtn.addEventListener("click", (dets) => {
    dets.stopPropagation();

    if (taskinp.value.trim() === "") {
        alert("Please enter a task")
        return; // ⛔️ stop the code here
    }
    setTimeout(() => {
        taskinp.value = "";
    }, 2000);

    let taskcontainer = document.createElement("div");
    let tasklist = document.createElement("p");
    let deletebtn = document.createElement("button");

    // adding custom css
    taskcontainer.classList.add("listitem");
    deletebtn.classList.add("delete");
    tasklist.classList.add("p");

    // Set text
    tasklist.textContent = taskinp.value;
    deletebtn.textContent = "Delete";

    // Append elements
    taskcontainer.appendChild(tasklist);
    taskcontainer.appendChild(deletebtn);
    main.appendChild(taskcontainer);


    // ✅ Add click to mark task complete
    tasklist.addEventListener("click", () => {
        tasklist.classList.toggle("completed");
    });

    // ✅ Delete task
    deletebtn.addEventListener("click", () => {
        taskcontainer.remove();
    });

});


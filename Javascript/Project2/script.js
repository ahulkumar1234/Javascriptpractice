let maincount = document.querySelector("#maincount");
let incrementbtn = document.querySelector(".incrementbtn");
let decrementbtn = document.querySelector(".decrementbtn");
let incrementcount = document.querySelector(".increment-count");
let decrementcount = document.querySelector(".decrement-count");

let count = 0;
let incClicks = 0;
let decClicks = 0;



// Update the main count display
function updateMainCount() {
    maincount.textContent = count;

    if (count < 0) {
        maincount.style.color = "red";
    } else {
        maincount.style.color = "white";
    }
}

// Increment logic
incrementbtn.addEventListener("click", function () {
    count++;
    incClicks++;
    updateMainCount();
    incrementcount.textContent = "Increment Clicks : " + incClicks;
});

// Decrement logic
decrementbtn.addEventListener("click", function () {
    count--;
    decClicks++;
    updateMainCount();
    decrementcount.textContent = "Decrement Clicks : " + decClicks;

});



let dot = document.createElement("div");
let scndot = document.createElement("div");

dot.classList.add("dot");
scndot.classList.add("scndot");

dot.appendChild(scndot); 
document.body.appendChild(dot); 

window.addEventListener("mousemove", function(dets) {
    dot.style.left = dets.clientX + "px"
    dot.style.top = dets.clientY + "px"

     scndot.style.left = dets.clientX + "px"
    scndot.style.top = dets.clientY + "px"
});

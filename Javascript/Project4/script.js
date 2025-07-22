let inp = document.querySelector("input");
let btn = document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("click", function () {
    let val = parseInt(inp.value);

    if (isNaN(val)) {
        para.textContent = "❌ Please enter a valid number.";
        return;
    }

    if (val % 2 === 0) {
        para.textContent = val + " is an Even Number ✅";
    } else {
        para.textContent = val + " is an Odd Number 🔢";
    }
});

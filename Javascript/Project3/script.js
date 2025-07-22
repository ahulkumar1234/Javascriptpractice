let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".links ul");
let lists = document.querySelectorAll("li");
let nav = document.querySelector(".navbar");

// Toggle sidebar on hamburger click
hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("showmenu");
});

// Hide sidebar when any <li> is clicked
lists.forEach(function (li) {
    li.addEventListener("click", function () {
        sidebar.classList.remove("showmenu"); // hide menu
    });
});

// Blur nav on scroll
window.addEventListener("scroll", function (dets) {
  if(window.scrollY > 50){
    nav.classList.add("scroll");
  }else{
    nav.classList.remove("scroll");
  }
});

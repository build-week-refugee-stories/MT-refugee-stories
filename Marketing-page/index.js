
const pel = document.querySelector(".pel");
pel.addEventListener("mouseover", e => {   
    // highlight the mouseover target
    e.target.style.color = "orange";


  setTimeout(function() {
      
    }, 100);
  }, false);

const war = document.querySelector(".war");
war.addEventListener("mouseover", e => {   
    // highlight the mouseover target
    e.target.style.opacity = "0.6";
});


const nav = document.querySelector("nav");
nav.addEventListener("mouseover", e => {   
    // highlight the mouseover target
    e.target.style.background = "white";
});
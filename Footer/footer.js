// Footer

const nav = document.querySelectorAll(".bottom-nav a");
nav.addEventListener("mouseover", e => {   
   
    e.target.style.background = "white";
// });
    setTimeout(function() {
        e.target.style.background = "";  
        }, 500);
    }, false);
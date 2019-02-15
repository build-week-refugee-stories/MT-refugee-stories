// Marketing page

const pel = document.querySelector(".pel");
pel.addEventListener("mouseover", e => {   

    e.target.style.color = "aqua";

  setTimeout(function() {
    e.target.style.color = "";  
    }, 5000);
  }, false);

const war = document.querySelector(".war");
war.addEventListener("mouseover", e => {   
 
    e.target.style.opacity = "0.66";

  setTimeout(function() {
    e.target.style.opacity = "";  
    }, 5000);
  }, false);
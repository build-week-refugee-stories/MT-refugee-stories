
const p = document.querySelector(".p");
p.addEventListener("mouseover", e => {   
    // highlight the mouseover target
    e.target.style.color = "orange";

  setTimeout(function() {
      e.target.style.color = "black";
    }, 50);
  }, false);

const p = document.querySelector(".p");
p.addEventListener("mouseover", e => {   
    // highlight the mouseover target
    e.target.style.color = "orange";

  setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
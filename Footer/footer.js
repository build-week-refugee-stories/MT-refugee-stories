// Footer

const bot = document.querySelectorAll("nav a");
bot.addEventListener("mouseover", e => {   
   
    e.target.style.background = "white";

    setTimeout(function() {
        e.target.style.background = "";  
        }, 5000);
    }, false);
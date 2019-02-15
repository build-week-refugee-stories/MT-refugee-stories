// Menu

const toggleMenu = () => {
    menu.classList.toggle('menu--over');
  }
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    toggleMenu();
  });

  const menudrop = document.querySelector(".menu");
  menudrop.addEventListener("mouseover", e => {   
     
    e.target.style.opacity = "0.66";

  setTimeout(function() {
    e.target.style.opacity = "";  
    }, 1000);
}, false);

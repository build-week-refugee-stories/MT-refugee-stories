
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
      // highlight the mouseover target
      e.target.style.opacity = "0.8";
  });

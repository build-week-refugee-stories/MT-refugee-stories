
const toggleMenu = () => {
    
    menu.classList.toggle('menu--over');
  }
  
  const menu = document.querySelector('.menu');
 
  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
  })
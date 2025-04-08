/* /////////////////////////////////////////////////////// */
// MENU
const menuToggle = document.getElementById('menuToggle');
const closeBtn  = document.getElementById('closeBtn');

const headerLogo    = document.getElementById('header-logo');
const desktopMenu   = document.querySelector('.desktop-menu');
const mainContent   = document.querySelector('main');
const footerContent = document.querySelector('footer');

// List of elements to hide when menu is open
const elementsToToggle = [menuToggle, headerLogo, desktopMenu, mainContent, footerContent];

let menuOpen = false;

function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  
  menuOpen = !menuOpen;
  // Toggle menu open class
  menu.classList.toggle('open', menuOpen);

  // Toggle visibility of elements
  elementsToToggle.forEach(el => {
    if (el) {
      el.classList.toggle('hidden-when-menu-open', menuOpen);
    }
  });
}

// Add event listeners for both open and close actions
menuToggle.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
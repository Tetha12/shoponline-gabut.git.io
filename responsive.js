const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('nav ul');
const toggle = document.querySelector('#toggle')

hamburgerMenu.addEventListener('click',function(){
    hamburgerMenu.style.display = 'none';
    navBar.style.display = 'flex';
})
toggle.addEventListener('click',function(){
    
    hamburgerMenu.style.display = 'block';
    navBar.style.display = 'none';
})

function resetNavbar() {
    if (window.innerWidth > 533) {
      navBar.style.display = 'flex';
    }
  }
  
window.addEventListener('resize', resetNavbar);
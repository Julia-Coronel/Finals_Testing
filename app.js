const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

function toggle() {
    const signUp = document.getElementById('sign_up');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle1() {
    const signUp = document.getElementById('digital_illustrations_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}

function toggle2() {
    const signUp = document.getElementById('character_design_popUP_container');
    signUp.style.display = signUp.style.display === 'none' ? 'flex' : 'none';
}
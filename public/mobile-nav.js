const toggle = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuNav = document.querySelector('.menu-nav');

    menuBtn.classList.toggle('open');
    menuNav.classList.toggle('open');
}
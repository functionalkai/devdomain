const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let target = e.currentTarget.href; // Use e.currentTarget to get the <a> element
        transitionElement.classList.add('active');
        setTimeout(() => {
            window.location.href = target;
        }, 500);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('toggle');
    });
});

let navbar = document.querySelector('.navbar');
let icon = document.querySelector('#menu-icon');


icon.onclick = () =>{
    navbar.classList.toggle( 'active-navbar')
    icon.classList.toggle( 'bx-x')
}


let sections = document.querySelectorAll('section');
let header = document.querySelector('header');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    icon.classList.remove('bx-x');
    navbar.classList.remove('active-navbar');
}
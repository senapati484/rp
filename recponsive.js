const sidemenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menubtn.addEventListener('click', () => {
    sidemenu.style.display = 'block';
})

closebtn.addEventListener('click', () => {
    sidemenu.style.display = 'none'
})

themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
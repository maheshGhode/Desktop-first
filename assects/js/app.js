let cl = console.log;

const toggelbtn = document.getElementById("toggelbtn");
const navbar = document.querySelector(".navbar ul");


const navbarshow = (e) => {
    navbar.classList.toggle('show')
}



toggelbtn.addEventListener("click", navbarshow);
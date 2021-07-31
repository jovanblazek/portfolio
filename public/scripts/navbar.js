function toggleNav() {
    const btn = document.querySelector(".nav-hamburger");
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
    btn.classList.toggle("open");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector("nav");
        const btn = document.querySelector(".nav-hamburger");
        if(nav.classList.contains("open") && btn.classList.contains("open"))
        {
            nav.classList.toggle("open");
            btn.classList.toggle("open");
        }
    })
});
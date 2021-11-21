const scrolling = document.querySelectorAll("[data-scroll]");

// Scrooling To
scrolling.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const elment = document.getElementById(btn.getAttribute("data-scroll")).offsetTop;
        window.scrollTo({top:elment, behavior:"smooth"})
    });
});

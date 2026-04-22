let section = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    section.forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        let height = window.innerHeight;

        if (top < height - 100){
            sec.classList.add("show");
        }
    });
});
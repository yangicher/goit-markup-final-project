function toggleMenu() {
    const menuElement = document.querySelector(".menu");
    const menuBackdrop = document.querySelector(".menu-backdrop");
    const burgerBtn = document.getElementById("burger-btn");
    const isOpen = burgerBtn.classList.contains("is-open");

    if (!isOpen) {
        menuElement.classList.add("open");
        menuBackdrop.classList.add("open");
        burgerBtn.classList.add("is-open");
        document.body.style.overflow = 'hidden';
    } else {
        menuElement.classList.remove("open");
        menuBackdrop.classList.remove("open");
        burgerBtn.classList.remove("is-open");
        document.body.style.overflow = '';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuBackdrop = document.querySelector(".menu-backdrop");
    menuBackdrop.addEventListener("click", function(event) {
        if (event.target === menuBackdrop) {
            toggleMenu();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            toggleMenu();
        }
    });

    const menuLinks = document.querySelectorAll("#nav-container .nav-link");
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            toggleMenu();
        });
    });
});
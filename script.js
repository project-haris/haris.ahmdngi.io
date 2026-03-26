const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".sidebar-nav a");
const sections = document.querySelectorAll(".doc-section");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        sidebar.classList.toggle("is-open", !expanded);
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (sidebar && menuToggle) {
            sidebar.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

const linkMap = new Map(
    Array.from(navLinks).map((link) => [link.getAttribute("href")?.slice(1), link])
);

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => link.classList.remove("is-active"));
            const activeLink = linkMap.get(entry.target.id);
            if (activeLink) {
                activeLink.classList.add("is-active");
            }
        });
    },
    {
        threshold: 0.25,
        rootMargin: "-10% 0px -55% 0px"
    }
);

sections.forEach((section) => sectionObserver.observe(section));

(() => {
  const header = document.querySelector("#fixed-navigation");
  const sectionNavigation = document.querySelector("#section-navigation");

  if (header && sectionNavigation) {
    const updateHeader = () => {
      const headerHeight = header.getBoundingClientRect().height;
      const isVisible = sectionNavigation.getBoundingClientRect().bottom <= headerHeight;

      header.classList.toggle("pointer-events-none", !isVisible);
      header.classList.toggle("-translate-y-full", !isVisible);
      header.classList.toggle("opacity-0", !isVisible);
      header.classList.toggle("pointer-events-auto", isVisible);
      header.classList.toggle("translate-y-0", isVisible);
      header.classList.toggle("opacity-100", isVisible);
      header.setAttribute("aria-hidden", String(!isVisible));

      if (isVisible) {
        header.removeAttribute("inert");
      } else {
        header.setAttribute("inert", "");
      }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const selector = link.getAttribute("href");
    if (!selector || selector === "#") return;

    const target = document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    const dropdown = link.closest("details");
    if (dropdown) dropdown.removeAttribute("open");
  });
})();


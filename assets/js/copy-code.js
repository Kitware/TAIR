(() => {
  document.querySelectorAll("[data-copy-button]").forEach((button) => {
    const wrapper = button.parentElement;
    const source = wrapper?.querySelector("[data-copy-source]");
    const label = button.querySelector("[data-copy-label]");
    const icon = button.querySelector("[data-copy-icon]");

    if (!source || !label || !icon) return;

    const defaultLabel = label.textContent;

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(source.textContent);
        label.textContent = button.dataset.copySuccess;
        icon.className = "ri-check-line text-lg text-success";
        button.classList.add("scale-105");

        window.setTimeout(() => {
          label.textContent = defaultLabel;
          icon.className = "ri-file-copy-line text-lg";
          button.classList.remove("scale-105");
        }, 1600);
      } catch (error) {
        console.error("Copy failed:", error);
      }
    });
  });
})();


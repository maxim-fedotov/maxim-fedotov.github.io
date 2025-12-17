(function () {
  function setHeaderOffset() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const h = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-offset", `${h}px`);
  }

  // Run ASAP after layout
  window.addEventListener("DOMContentLoaded", setHeaderOffset);
  window.addEventListener("load", setHeaderOffset);
  window.addEventListener("resize", setHeaderOffset);

  // If the header changes height due to wrapping, fonts, etc.
  if ("ResizeObserver" in window) {
    window.addEventListener("DOMContentLoaded", () => {
      const header = document.querySelector(".site-header");
      if (!header) return;
      new ResizeObserver(setHeaderOffset).observe(header);
    });
  }
})();

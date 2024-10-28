document.addEventListener("DOMContentLoaded", function () {
  const description = document.querySelector(".p_description");

  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to trigger the CSS transition
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Unobserve after the animation triggers
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe the paragraph inside the section
  observer.observe(description);
});

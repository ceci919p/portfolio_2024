document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".p_section");

  // Set up Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view"); // Trigger animation
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe each .p_section
  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(".paragraph");

  // Options for the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the paragraph is visible
  };

  // Callback function for Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add the 'visible' class with a delay
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // Delay each paragraph by 200ms
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each paragraph
  paragraphs.forEach((paragraph) => {
    observer.observe(paragraph);
  });
});

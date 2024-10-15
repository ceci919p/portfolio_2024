// JavaScript to detect when containers are in view on mobile/tablet and apply hover effect
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add hover effect when the container is in view
      entry.target.querySelector(".overlay").style.opacity = "1";
    } else {
      // Remove hover effect when the container is out of view
      entry.target.querySelector(".overlay").style.opacity = "0";
    }
  });
}

// Create the observer only for mobile and tablet
if (window.innerWidth <= 864) {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Observe all project containers
  document.querySelectorAll(".p_container").forEach((container) => {
    observer.observe(container);
  });
}

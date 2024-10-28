// Select all elements (h2, div, etc.) inside sections with the class .fade-section
const fadeElements = document.querySelectorAll(
  ".fade-h2, .fade-div, .fade-section"
);

// Function to check if each element is in view
function checkScroll() {
  // Loop through each element inside .fade-section (h2, div, etc.)
  fadeElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Adjust when to trigger

    // Check if the element is in the viewport
    if (elementPosition < screenPosition && elementPosition > 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

// Event listener for scrolling
window.addEventListener("scroll", checkScroll);

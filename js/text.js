const introH1 = document.querySelector("#intro h1");

// Function to check if the h1 is in view
function checkScroll() {
  const introPosition = introH1.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3; // Adjust when to trigger

  if (introPosition < screenPosition) {
    introH1.classList.add("visible");
  }
}

// Event listener for scrolling
window.addEventListener("scroll", checkScroll);

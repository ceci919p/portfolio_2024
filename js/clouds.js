// Select all clouds
const clouds = document.querySelectorAll(".clouds");

// Function to reset the position of all clouds
function resetClouds() {
  clouds.forEach((cloud, index) => {
    // Set the left position based on the index of the cloud
    if (index === 0) {
      cloud.style.left = "-100vw"; // Reset clouds1 to -100%
    } else {
      cloud.style.left = `-${(index + 1) * 100}vw`; // Reset others to their respective positions
    }
  });
}

// Add event listener to detect when the animation ends for each cloud
clouds.forEach((cloud) => {
  cloud.addEventListener("animationiteration", resetClouds);
});

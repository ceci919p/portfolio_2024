const marqueeContent = document.querySelector(".marquee-content");
const baseSpeed = 30; // base speed in seconds for larger screens
const mobileSpeed = 60; // speed for mobile screens

function adjustMarqueeSpeed() {
  const screenWidth = window.innerWidth;

  // Set animation speed based on screen size
  let calculatedSpeed = baseSpeed;
  if (screenWidth < 768) {
    // Change this breakpoint as needed
    calculatedSpeed = mobileSpeed; // slower speed for mobile devices
  } else {
    calculatedSpeed = Math.max(baseSpeed * (screenWidth / 1200), 5); // minimum speed of 5s
  }

  marqueeContent.style.animationDuration = `${calculatedSpeed}s`;

  // After the first iteration, set the animation to start from 100%
  setTimeout(() => {
    marqueeContent.style.animationDelay = `${calculatedSpeed}s`; // start from 100%
  }, calculatedSpeed * 1000); // convert seconds to milliseconds
}

// Adjust speed on resize and load
window.addEventListener("resize", adjustMarqueeSpeed);
window.addEventListener("load", adjustMarqueeSpeed);

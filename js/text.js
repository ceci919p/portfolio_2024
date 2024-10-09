// const introH1 = document.querySelector("#intro h1");

// // Function to check if the h1 is in view
// function checkScroll() {
//   const introPosition = introH1.getBoundingClientRect().top;
//   const screenPosition = window.innerHeight / 1.3; // Adjust when to trigger

//   if (introPosition < screenPosition) {
//     introH1.classList.add("visible");
//   }
// }

// // Event listener for scrolling
// window.addEventListener("scroll", checkScroll);

//--------------------
// const introH1 = document.querySelector("#intro h2");

// // Function to check if the h1 is in view
// function checkScroll() {
//   const introPosition = introH1.getBoundingClientRect().top;
//   const screenPosition = window.innerHeight / 1.3; // Adjust when to trigger

//   // Check if the element is in the viewport
//   if (introPosition < screenPosition && introPosition > 0) {
//     introH1.classList.add("visible");
//   } else {
//     introH1.classList.remove("visible");
//   }
// }

// // Event listener for scrolling
// window.addEventListener("scroll", checkScroll);

//---------------------

/* const introH1 = document.querySelector("#intro h2");
const introSpan = document.querySelector("#intro h2 span");

// Array of words to cycle through
const words = [
  "a digital designer",
  "a UI/UX enthusiast",
  "a frontend developer",
  "a problem solver",
];
let wordIndex = 0;
let isAnimating = false;
let wordChangeInterval;

// Function to check if the intro section is in view
function checkScroll() {
  const introPosition = introH1.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  // Check if the intro section is in the viewport
  if (
    introPosition < screenPosition &&
    introPosition > 0 &&
    !wordChangeInterval
  ) {
    introH1.classList.add("visible");
    startWordChange();
  } else if (introPosition > screenPosition || introPosition <= 0) {
    introH1.classList.remove("visible");
    stopWordChange();
  }
}

function startWordChange() {
  // Start changing words only if not already animating
  wordChangeInterval = setInterval(() => {
    if (!isAnimating) {
      changeWord();
    }
  }, 3000); // Change every 3 seconds
}

function stopWordChange() {
  clearInterval(wordChangeInterval);
  wordChangeInterval = null;
}

// Function to change the word inside the span
function changeWord() {
  isAnimating = true;

  // Trigger the fade-out animation
  introSpan.classList.add("fade-out");

  // Wait for the fade-out transition to complete before changing the text
  setTimeout(() => {
    // Cycle to the next word
    wordIndex = (wordIndex + 1) % words.length;
    introSpan.textContent = words[wordIndex];

    // Remove the fade-out and apply the fade-in class
    introSpan.classList.remove("fade-out");
    introSpan.classList.add("fade-in");

    // Wait for the fade-in transition to complete
    setTimeout(() => {
      introSpan.classList.remove("fade-in");
      isAnimating = false; // Allow the next animation to run
    }, 600); // Match this to the transition duration (0.6s)
  }, 600); // Match this to the transition duration (0.6s)
}

// Event listener for scrolling
window.addEventListener("scroll", checkScroll); */

//------

const introH1 = document.querySelector("#intro h2");
const introSpan = document.querySelector("#intro h2 span");

// Array of words to cycle through
const words = [
  "a digital designer",
  "a UI/UX enthusiast",
  "a frontend developer",
  "a problem solver",
];
let wordIndex = 0;
let isAnimating = false;
let wordChangeInterval;
let hasRunOnce = false; // Flag to track if the animation has run once

// Function to check if the intro section is in view
function checkScroll() {
  const introPosition = introH1.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  // Check if the intro section is in the viewport and if the animation hasn't run yet
  if (introPosition < screenPosition && introPosition > 0 && !hasRunOnce) {
    introH1.classList.add("visible");
    startWordChange();
  }
}

// Function to start changing words
function startWordChange() {
  wordChangeInterval = setInterval(() => {
    if (!isAnimating) {
      changeWord();
    }
  }, 2000); // Change every 3 seconds
}

// Function to change the word inside the span
function changeWord() {
  isAnimating = true;

  // Trigger the fade-out animation
  introSpan.classList.add("fade-out");

  // Wait for the fade-out transition to complete before changing the text
  setTimeout(() => {
    // Cycle to the next word
    wordIndex = (wordIndex + 1) % words.length;
    introSpan.textContent = words[wordIndex];

    // Remove the fade-out and apply the fade-in class
    introSpan.classList.remove("fade-out");
    introSpan.classList.add("fade-in");

    // Wait for the fade-in transition to complete
    setTimeout(() => {
      introSpan.classList.remove("fade-in");
      isAnimating = false; // Allow the next animation to run

      // Stop after cycling through all words once
      if (wordIndex === words.length - 1) {
        clearInterval(wordChangeInterval); // Stop the word change
        hasRunOnce = true; // Mark that the animation has run once
      }
    }, 600); // Match this to the transition duration (0.6s)
  }, 600); // Match this to the transition duration (0.6s)
}

// Event listener for scrolling
window.addEventListener("scroll", checkScroll);

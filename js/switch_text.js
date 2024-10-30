const introSpan = document.querySelector("#intro span");

// Array of words to cycle through
const words = [
  "digital designer",
  "content creator",
  "UI/UX designer",
  "frontend developer",
  "graphic designer",
];
let wordIndex = 0;
let isAnimating = false;

// Function to start changing words on page load
function startWordChange() {
  setInterval(() => {
    if (!isAnimating) {
      changeWord();
    }
  }, 2000); // Change every 2 seconds
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

// Start the word change animation immediately
startWordChange();

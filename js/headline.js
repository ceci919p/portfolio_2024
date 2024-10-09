/* document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Content Creator",
    "Digital Designer",
    "Cecilie Jasmin",
  ];
  const textElement = document.getElementById("animated_text");
  let wordIndex = 0;

  function changeWord() {
    if (wordIndex < words.length) {
      textElement.style.opacity = 0; // Fade out
      // textElement.style.transform = "translateX(-20px)";

      setTimeout(() => {
        textElement.textContent = words[wordIndex]; // replace text
        // textElement.style.transform = "translateX(0)";
        textElement.style.opacity = 1; // Fade in
        wordIndex++;
        setTimeout(changeWord, 400); // Time between words
      }, 400); // Fade out time
    }
  }

  changeWord(); // Start animation
}); */

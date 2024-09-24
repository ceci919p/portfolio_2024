document.addEventListener("DOMContentLoaded", () => {
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
      setTimeout(() => {
        textElement.textContent = words[wordIndex]; // Skift tekst
        textElement.style.opacity = 1; // Fade in
        wordIndex++;
        setTimeout(changeWord, 400); // Tid mellem ord (2 sekunder)
      }, 200); // Fade out tid (0.5 sekunder)
    }
  }

  changeWord(); // Start animationen
});

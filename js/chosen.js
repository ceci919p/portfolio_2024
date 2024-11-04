// Select all buttons
const buttons = document.querySelectorAll(".btn.pink");

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    // Remove 'chosen' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("chosen"));
    // Add 'chosen' class to the clicked button
    button.classList.add("chosen");
  });
});

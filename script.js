const typewriterTexts = [
  "Creative Thinker ",
  "Problem Solver ",
  "Figma Expert",
  "Visual Storyteller",
  "Design to Reality "
];

let currentText = "";
let textIndex = 0;
let charIndex = 0;
const speed = 100;
const target = document.getElementById("typewriter-text");

function type() {
  if (charIndex < typewriterTexts[textIndex].length) {
    currentText += typewriterTexts[textIndex].charAt(charIndex);
    target.innerHTML = currentText;
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, -1);
    target.innerHTML = currentText;
    charIndex--;
    setTimeout(erase, speed / 2);
  } else {
    textIndex = (textIndex + 1) % typewriterTexts.length;
    setTimeout(type, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("close-btn");
  const introBox = document.getElementById("intro-box");

  if (closeBtn && introBox) {
    closeBtn.addEventListener("click", function () {
      introBox.style.display = "none";
    });
  }
});


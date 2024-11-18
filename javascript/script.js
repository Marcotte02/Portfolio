"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const homeSection = document.getElementById("home");
  const nav = document.getElementById("navbar");
  const sections = document.querySelectorAll(".section");
  const navLinks = nav.querySelectorAll("a");

  // Function for fade-in effect
  const fadeIn = (element, delay = 1000) => {
    setTimeout(() => {
      element.classList.remove("hidden");
      element.classList.add("fade-in");
    }, delay);
  };

  // Function for fade-out effect
  const fadeOut = (element) => {
    element.classList.add("fade-out");
    setTimeout(() => {
      element.classList.add("hidden");
      element.classList.remove("fade-out");
    }, 1000); // Reduced time for fade-out effect
  };

  // Logic for when a box is clicked
  boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
      const targetSectionId = event.target.getAttribute("data-selection");
      const targetSection = document.getElementById(targetSectionId);

      fadeOut(homeSection);

      setTimeout(() => {
        nav.classList.remove("hidden");
        fadeIn(nav);
        fadeIn(targetSection);
      }, 1000); // Adjusted time to match the fade-out duration
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSectionId = event.target
        .getAttribute("id")
        .replace("-link", "");
      const targetSection = document.getElementById(targetSectionId);

      sections.forEach((section) => {
        if (
          !section.classList.contains("hidden") &&
          section !== targetSection
        ) {
          fadeOut(section);
        }
      });

      if (targetSectionId === "home") {
        fadeOut(nav);
        setTimeout(() => fadeIn(homeSection), 500);
      } else {
        fadeIn(targetSection);
      }
    });
  });
});

"use strict";
const proffessionList = document.getElementById("proffession-list");
const firstSect = document.getElementById("firstSection");
const redLine = document.getElementById("redLine");

// function isElementInViewport(el) {
//   let rect = el.getBoundingClientRect();
//   if (rect.top <= 308) {
//     return true;
//   } else return false;
// }
// window.addEventListener("scroll", () => {
//   if (isElementInViewport(firstSect)) {
//     redLine.classList.add("fill");
//   }
// });

// function isElementInViewport(el) {
//   let rect = el.getBoundingClientRect();
//   let scrollThreshold = el.offsetHeight * 0.8;
//   return rect.top <= scrollThreshold;
// }

// window.addEventListener("scroll", () => {
//   let redLine = document.getElementById("redLine");
//   let firstSection = document.getElementById("firstSection");
//   if (isElementInViewport(firstSection)) {
//     redLine.style.width = "80%";
//   } else {
//     redLine.classList.remove("fill");
//   }
// });

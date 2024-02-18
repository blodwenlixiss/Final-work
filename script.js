"use strict";

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
const precentages = [80, 100, 70, 80];
const skills = ["HTML", "CSS", "Javascript", "BootsTrap"];

window.addEventListener("scroll", function () {
  const firstSect = document.getElementById("firstSection");
  const firstsectTop = firstSect.offsetTop;
  const secondSection = document.querySelector(".second-section");
  const secondSectionTop = secondSection.offsetTop;
  const windowHeight = window.innerHeight;
  const proffessionListItems = document.querySelectorAll(
    "#proffession-list li"
  );

  if (
    window.scrollY + windowHeight >= firstsectTop &&
    window.scrollY + windowHeight <= secondSectionTop
  ) {
    precentages.forEach((e, index) => {
      proffessionListItems[index].innerHTML = `
      ${skills[index]}<span> (${e}%)</span>
        <div class="grey-line">
          <div class="red-line" style="width: ${e}%;"></div>
        </div>
      `;
    });
  }
});

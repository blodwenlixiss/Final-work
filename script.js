"use strict";

const targetDiv = document.querySelector(".header-wrapper");
const changeImg = (img, i) => {
  const images = [
    "https://image.cdn2.seaart.ai/2023-11-23/23444498679873541/27039fde8aa7f156b61e1ac431188458cd8d6c0b_high.webp",
    "https://a-static.besthdwallpaper.com/sunset-beach-art-wallpaper-1920x1080-81345_48.jpg",
    "https://i.redd.it/glvk16l7gah51.jpg",
  ];

  if (i >= 0 && i < images.length) {
    targetDiv.style.backgroundImage = `url(${images[i]})`;
  }
};

const imgSlider = () => {
  targetDiv.style.backgroundSize = "cover";
  targetDiv.style.backgroundRepeat = "no-repeat";

  let i = 0;

  setInterval(() => {
    changeImg(targetDiv, i);
    i += 1;
    if (i >= 5) {
      i = 0;
    }
  }, 2000);
};

imgSlider();

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
      proffessionListItems[index].querySelector(".red-line").style.width =
        e + "%";
    });
  }
});

const sliderBtn = document.querySelectorAll(".slider-btn");
const sliderText = document.getElementById("slider-text");
const dashedContainer = document.querySelector(".dashed-big");
const recomendations = [
  {
    profession: "Back-End Developer",
    name: "Giorgi Bazadze",
    image: "./images/d4.svg",
  },
  {
    profession: "Front-End Developer",
    name: "John Doe",
    image: "./images/d5.svg",
  },
  {
    profession: "UI/UX Designer",
    name: "Jane Smith",
    image: "./images/d3.svg",
  },
];

sliderBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    const recomendation = recomendations[index];
    sliderText.innerHTML = `
    <div class="claws"><span>“</span></div>
        <span class="profession">${recomendation.profession}</span>
        <h3 class="profession-name">${recomendation.name}</h3>
        `;
    dashedContainer.innerHTML = `
        <img class="personal-img" src="${recomendation.image}" />
        `;
  });
});
const thirdSect = document.getElementById("third-sect-container");
const buttons = document.querySelectorAll(".buttons button");
const projectImages = document.querySelectorAll(".image");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    projectImages.forEach((image) => {
      if (filter === "all" || image.classList.contains(filter)) {
        image.classList.remove("hide");
      } else {
        image.classList.add("hide");
        thirdSect.style.display = "block";
      }
      if (filter === "all") {
        thirdSect.style.display = "grid";
      }
    });
  });
});
const form = document.getElementById("formContainer");
const url = "https://jsonplaceholder.typicode.com/posts";
const regex = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const regexWebsite = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
    );
};
const success = async (obj) => {
  try {
    obj = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
    });
  } catch (err) {
    alert(err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = document.forms.formContainer;
  try {
    if (formValues.fullName.value === "") {
      throw new Error("Invalid Name");
    }
    if (!regex(formValues.email.value)) {
      throw new Error("Invalid Email");
    }
    if (!regexWebsite(formValues.website.value)) {
      throw new Error("Ivalid Website");
    }
    if (formValues.textarea.value.length < 15) {
      throw new Error("Text should have more than 15 words");
    }
    const data = {
      fullName: formValues.fullName.value,
      email: formValues.email.value,
      website: formValues.website.value,
      message: formValues.textarea.value,
    };
    success(data);
    alert("Message Sent");
    form.reset();
  } catch (err) {
    alert(err);
  }
});

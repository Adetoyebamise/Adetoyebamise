// show menu
const toggleMenu = document.querySelector(".nav__toggle");

const navMenuToggle = document.querySelector(".nav__menu");

toggleMenu.addEventListener("click", () => {
  navMenuToggle.classList.toggle("show__menu");
});

// remove menu mobile
const navNodeList = document.querySelectorAll(".nav__list");
navNodeList.forEach((navElement) => {
  navElement.addEventListener("click", () => {
    navMenuToggle.classList.remove("show__menu");
  });
});

// scroll sections active link
// const sectionsWithId = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollVertical = window.pageYOffset;
//   console.log(scrollVertical);
//   sectionsWithId.forEach((currentHeight) => {
//     console.log(currentHeight);

//     const sectionWithIdHeight = currentHeight.offsetHeight;
//     console.log(sectionWithIdHeight);
//     const sectionWithIdTop = currentHeight.offsetTop - 50;
//     console.log(sectionWithIdTop);
//     sectionId = currentHeight.getAttribute("id");
//     console.log(sectionId);
//     if (
//       scrollVertical > sectionWithIdTop &&
//       scrollVertical <= sectionWithIdTop + sectionWithIdHeight
//     ) {
//       const abc = document.querySelector(
//         ".nav__menu a[href*=" + sectionId + "]"
//       );
//       console.log(abc);
//       abc.classList.add("active__link");
//     } else {
//       const xyz = document.querySelector(
//         ".nav__menu a[href*=" + sectionId + "]"
//       );
//       console.log(xyz);
//       xyz.classList.remove("active__link");
//     }
//   });
// };
//a[href*=sectionId]a[href=]
// window.addEventListener("scroll", scrollActive());

// show scroll top
const scrollTop = () => {
  const scrollTopLevel = document.querySelector(".scrolltop");
  console.log(scrollTopLevel);
  // when the scroll is higher than 560 viewport,
  //add the show scroll class to the "a" tag with the scroll-top class
  if (window.pageYOffset >= 200) {
    scrollTopLevel.classList.add("show-scroll");
  } else {
    scrollTopLevel.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollTop());

// reduce the size and print on an A4 sheet
const scaleCv = () => {
  document.body.classList.add("scale-cv");
};

// remove the size when the cv is downloaded
const removeScaledCv = () => {
  document.body.classList.remove("scale-cv");
};
console.log(removeScaledCv);

// generate pdf : pdf generated area
let areaCv = document.querySelector(".resume");
console.log(areaCv);
let resumeButton = document.querySelector(".generate-pdf");
console.log(resumeButton);

// html2pdf options
let opt = {
  margin: 0,
  filename: "adetoyeBamiseResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
};

// function to call areaCv and HTML2pdf options
const generateResume = () => {
  html2pdf(areaCv, opt);
};

// when button is clicked, it executes the three functions
resumeButton.addEventListener("click", () => {
  // 1. the class .scale-cv is added to the body, where it redeuces the  size of the ..
  scaleCv();
  // 2. the pdf is generated
  generateResume();
  // 3. the scale-cv class is removed from the body after 5 seconds to ..
  setTimeout(removeScaledCv, 2000);
});

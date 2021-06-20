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
const sectionsWithId = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollVertical = window.pageYOffset;

  sectionsWithId.forEach((currentHeight) => {
    const sectionWithIdHeight = currentHeight.offsetHeight;

    const sectionWithIdTop = currentHeight.offsetTop - 50;

    const sectionId = currentHeight.getAttribute("id");

    if (
      scrollVertical > sectionWithIdTop &&
      scrollVertical <= sectionWithIdTop + sectionWithIdHeight
    ) {
      const abc = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
      abc.classList.add("active__link");
    } else {
      const abc = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
      abc.classList.remove("active__link");
    }
  });
};

window.addEventListener("scroll", scrollActive());

// show scroll top
const scrollTop = () => {
  const scrollTop = document.querySelector("scrolltop");
  // when the scroll is higher than 560 viewport,
  //add the show scroll class to the "a" tag
  if (pageYOffset >= 200) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollTop);

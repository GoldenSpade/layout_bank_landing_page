// search in nav block

const searchInput = document.querySelector("#search");
const navInputWrap = document.querySelector(".nav__input-wrap");
const labelDel = document.querySelector(".nav__label-del");

document.addEventListener("click", toggleSearch);

function toggleSearch(event) {
  if (event.target.closest(".nav__label")) {
    navInputWrap.classList.toggle("nav__input-wrap--hide");
  }
  if (!event.target.closest(".nav__form")) {
    navInputWrap.classList.add("nav__input-wrap--hide");
  }
}

// clear input in search block

labelDel.addEventListener("click", () => {
  searchInput.value = "";
});

// menu-mobile

const body = document.querySelector("body");
const menuMobile = document.querySelector(".menu-mobile");
const btnShowMobileMenu = document.querySelector(".nav__show-mobile-menu");
const btnMobileMenuClose = document.querySelector(".menu-mobile__close");

btnShowMobileMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile--show");
  body.classList.toggle("block-scroll");
  menuMobile.style.top = window.scrollY + "px";
});

btnMobileMenuClose.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile--show");
  body.classList.toggle("block-scroll");
});

// animations on scroll

// header
// header > .header__content-title

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".header__content-title"); // class to animate
    if (entry.isIntersecting) {
      target.classList.add("header__content-title--animation"); // class with animation
      return;
    }
    target.classList.remove("header__content-title--animation"); // class with animation
  });
}).observe(document.querySelector(".header__content")); // parent class with animation

// header > .header__content-text

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".header__content-text");
    if (entry.isIntersecting) {
      target.classList.add("header__content-text--animation");
      return;
    }
    target.classList.remove("header__content-text--animation");
  });
}).observe(document.querySelector(".header__content"));

// header > .header__content-buttons

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".header__content-buttons");
    if (entry.isIntersecting) {
      target.classList.add("header__content-buttons--animation");
      return;
    }
    target.classList.remove("header__content-buttons--animation");
  });
}).observe(document.querySelector(".header__content"));

// header > .header__contacts

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".header__contacts");
    if (entry.isIntersecting) {
      target.classList.add("header__contacts--animation");
      return;
    }
    target.classList.remove("header__contacts--animation");
  });
}).observe(document.querySelector(".header__content"));

// experience > experience__items

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".experience__items");
    if (entry.isIntersecting) {
      target.classList.add("experience__items--animation");
      return;
    }
    target.classList.remove("experience__items--animation");
  });
}).observe(document.querySelector(".experience__wrap"));

// partners > partners__items

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".partners__items");
    if (entry.isIntersecting) {
      target.classList.add("partners__items--animation");
      return;
    }
    target.classList.remove("partners__items--animation");
  });
}).observe(document.querySelector(".partners__wrap"));

// glance > glance__img-wrap

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".glance__img-wrap");
    if (entry.isIntersecting) {
      target.classList.add("glance__img-wrap--animation");
      return;
    }
    target.classList.remove("glance__img-wrap--animation");
  });
}).observe(document.querySelector(".glance__wrap"));

// glance > glance__items

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".glance__items");
    if (entry.isIntersecting) {
      target.classList.add("glance__items--animation");
      return;
    }
    target.classList.remove("glance__items--animation");
  });
}).observe(document.querySelector(".glance__wrap"));

// services > services__items

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".services__items");
    if (entry.isIntersecting) {
      target.classList.add("services__items--animation");
      return;
    }
    target.classList.remove("services__items--animation");
  });
}).observe(document.querySelector(".services__wrap"));

// results > results__items

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".results__items");
    if (entry.isIntersecting) {
      target.classList.add("results__items--animation");
      return;
    }
    target.classList.remove("results__items--animation");
  });
}).observe(document.querySelector(".results__wrap"));

// subscribe > subscribe__wrap

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target.querySelector(".subscribe__wrap");
    if (entry.isIntersecting) {
      target.classList.add("subscribe__wrap--animation");
      return;
    }
    target.classList.remove("subscribe__wrap--animation");
  });
}).observe(document.querySelector(".subscribe__outer"));

// end of animations on scroll

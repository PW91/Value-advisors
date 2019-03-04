"use strict";

import SmoothScroll from "./smoothscroll";

(() => {
  //const navDotEl = document.getElementsByClassName("nav-dot")[0];

  const helloNavEl = document.getElementsByClassName("nav-item-hello")[0];
  const aboutNavEl = document.getElementsByClassName("nav-item-about")[0];
  const offerNavEl = document.getElementsByClassName("nav-item-offer")[0];
  const expNavEl = document.getElementsByClassName("nav-item-exp")[0];
  //const clientsNavEl = document.getElementsByClassName("nav-item-clients")[0];
  const contactNavEl = document.getElementsByClassName("nav-item-contact")[0];

  const helloSectionEl = document.getElementsByClassName("section-hello")[0];
  const aboutSectionEl = document.getElementsByClassName("section-about")[0];
  const offerSectionEl = document.getElementsByClassName("section-offer")[0];
  const expSectionEl = document.getElementsByClassName("section-exp")[0];
  //const clientsSectionEl = document.getElementsByClassName("section-clients")[0];
  const contactSectionEl = document.getElementsByClassName(
    "section-contact"
  )[0];

  const hamburgerEl = document.getElementsByClassName("hamburger")[0];
  const mobileNavEl = document.getElementsByClassName("mobile-nav")[0];
  const mobileNavLiEls = document.getElementsByClassName("nav-item-mobile")

  hamburgerEl.addEventListener('click', function() {
    if (mobileNavEl.classList.contains('active')) {
      mobileNavEl.classList.remove('active')
    } else {
      mobileNavEl.classList.add('active')
    }

  })

  for (var i = 0; i<mobileNavLiEls.length; i++) {
    mobileNavLiEls[i].addEventListener('click', function() {
      mobileNavEl.classList.remove('active')
    })
  }

  const deviceType = window.innerWidth > 991 ? "desktop" : "mobile";
  let scrollingDest = "";

  function scrollingAnimation() {
    const scroll = window.scrollY - window.innerHeight / 2;

    if (scroll > expSectionEl.offsetTop) {
      if (scrollingDest !== "contact") {
        setFlag("contact");
        removeCssClasses();
        addClass(contactNavEl);
      }
    } else if (scroll > offerSectionEl.offsetTop) {
      if (scrollingDest !== "exp") {
        setFlag("exp");
        removeCssClasses();
        addClass(expNavEl);
      }
    } else if (scroll > aboutSectionEl.offsetTop) {
      if (scrollingDest !== "offer") {
        setFlag("offer");
        removeCssClasses();
        addClass(offerNavEl);
      }
    } else if (scroll > helloSectionEl.offsetTop) {
      if (scrollingDest !== "about") {
        setFlag("about");
        removeCssClasses();
        addClass(aboutNavEl);
      }
    } else {
      if (scrollingDest !== "hello") {
        setFlag("hello");
        removeCssClasses();
        addClass(helloNavEl);
      }
    }
  }

  function addClass(el) {
    el.classList.add("active");
  }

  function setFlag(flag) {
    scrollingDest = flag;
  }

  function removeCssClasses() {
    helloNavEl.classList.remove("active");
    aboutNavEl.classList.remove("active");
    offerNavEl.classList.remove("active");
    expNavEl.classList.remove("active");
    //clientsNavEl.classList.remove("active");
    contactNavEl.classList.remove("active");
  }

  document.addEventListener("scroll", scrollingAnimation);

  const smoothScroll = new SmoothScroll('a[href*="#"]');
})();

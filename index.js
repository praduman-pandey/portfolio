const heroSection = document.querySelector(".section-hero");
// ========================================
// creating a responsive navbar component
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle("active");
});

// ========================================
// creating a sticky navbar
// ========================================

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  // console.log(ent);
  !ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
  // document.body.classList.add("sticky");
}, {
  root: null,
  threshold: 0,
});

if (heroSection != null) {
  observer.observe(heroSection);
}


// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

if (p_btns != null) {

  p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains('p-btn')) return;

    p_btn.forEach((curnElem) => curnElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curnElem) => curnElem.classList.add('p-image-not-active'));

    img_active.forEach((curnElem) => curnElem.classList.remove('p-image-not-active'));

    // p_img_elem
    // p-btn--1
  });

}


// swiper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}

const widthSize = window.matchMedia('(max-width:780px)');

// Call listener function at run time
myJsmedia(widthSize);

// Attach listener function on state changes
widthSize.addEventListener('change', myJsmedia)

// ========================================
//  scroll to top
// ========================================

// const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

if (heroSection != null) {
  const scrollElement = document.createElement("div");
  scrollElement.classList.add("scrollTop-style");

  scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

  footerElem.after(scrollElement);

  const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  scrollElement.addEventListener("click", scrollTop);

}

// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  // if(!entry.isIntersecting == false);
  if (!entry.isIntersecting) return;

  // animate number counter

  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200;

  counterNum.forEach((curnElem) => {

    const updateNumber = () => {
      const targetNumber = parseInt(curnElem.dataset.number);
      // console.log((targetNumber));

      const initialNum = parseInt(curnElem.innerText);
      // console.log(initialNum);

      const increamentNumber = Math.trunc(targetNumber / speed);
      // console.log(increamentNumber);

      if (initialNum < targetNumber) {
        curnElem.innerText = `${initialNum + increamentNumber}+`;

        setTimeout(updateNumber, 10);
      }
    };

    updateNumber();
  });

  observer.unobserve(workSection);
}, {
  root: null,
  threshold: 0,
});

if (workSection != null) {
  workObserver.observe(workSection);
}

// ========================================
//  lazy loading section
// ========================================
const imgRef = document.querySelector("img[data-src]");
// console.log(imgRef);

const lazyImg = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
  // rootMargin: "100px",
});

if (imgRef != null) {
  imgObserver.observe(imgRef);
}


/* Below is a code for blocking inspect, right click in homepage date: 07-09-2022 */

if (heroSection != null) {

  document.addEventListener('contextmenu', event => event.preventDefault());

  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }
}
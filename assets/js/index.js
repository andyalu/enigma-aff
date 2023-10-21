// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// PARALLAX EFFECT
function parallaxEffect(e) {
  selectAll(".parallax-el").forEach((el) => {
    let movingValue = el.getAttribute("data-value");
    let x = (e.clientX * movingValue) / 300;
    let y = (e.clientY * movingValue) / 300;

    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.addEventListener("mousemove", parallaxEffect);

// REVEALING ON SCROLL
const the_animation = selectAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// NAVIGATION
const scrollToElem = (elem) => {
  select(elem).scrollIntoView({ behavior: "smooth" });
};

// YEAR
selectAll(".year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// LANGUAGE SELECTOR DROPDOWN

// Header selector
const mainWrapper = document.querySelector(".main-wrapper");
const langSelector = document.querySelector(".language-selector");
const langSelectorValue = document.querySelector(".language-selector-value");
const langSelectorOptions = document.querySelector(
  ".language-selector-options"
);
const flagImg = document.querySelector(".flag-img");

const dropdownShow = () => {
  langSelectorOptions.classList.toggle("active");
};

langSelector.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownShow();
});

langSelectorOptions.addEventListener("click", (e) => {
  langSelectorValue.innerText = e.target.id;
  flagImg.src = `assets/img/flags/${e.target.getAttribute("data-flag")}.png`;
});

mainWrapper.onclick = () => {
  langSelectorOptions.classList.remove("active");
};

// REDIRECTING =================================================

// const goTo = {
//   enIndex: () => {
//     window.location = "/en/";
//   },
//   enCards: () => {
//     window.location = "/en/cards/";
//   },
//   enAccounts: () => {
//     window.location = "/en/accounts/";
//   },
//   enCPA: () => {
//     window.location = "/en/cpa/";
//   },
//   ruIndex: () => {
//     window.location = "/";
//   },
//   ruCards: () => {
//     window.location = "/cards/";
//   },
//   ruAccounts: () => {
//     window.location = "/accounts/";
//   },
//   ruCPA: () => {
//     window.location = "/cpa/";
//   },
// };

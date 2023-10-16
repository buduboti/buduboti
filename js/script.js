let g_ham = 0;
let labels = document.getElementById("nav-labels").getElementsByTagName("div");
let label_arr = Array.from(labels);

const portrait = window.matchMedia("(orientation: portrait)");

document.getElementById("nav-point-top").addEventListener("mouseenter", () => {
  if (!portrait.matches) {
    labels[0].style.visibility = "visible";
  }
});

document.getElementById("nav-point-top").addEventListener("mouseleave", () => {
  if (!portrait.matches) {
    labels[0].style.visibility = "hidden";
  }
});

// document.getElementById("nav-point-top").addEventListener("click", () => {
//   window.location.hash = "title";
// });

document
  .getElementById("nav-point-portfolio")
  .addEventListener("mouseenter", () => {
    if (!portrait.matches) {
      labels[1].style.visibility = "visible";
    }
  });

document
  .getElementById("nav-point-portfolio")
  .addEventListener("mouseleave", () => {
    if (!portrait.matches) {
      labels[1].style.visibility = "hidden";
    }
  });

// document.getElementById("nav-point-portfolio").addEventListener("click", () => {
//   window.location.hash = "portfolio";
// });

document.getElementById("nav-point-edu").addEventListener("mouseenter", () => {
  if (!portrait.matches) {
    labels[2].style.visibility = "visible";
  }
});

document.getElementById("nav-point-edu").addEventListener("mouseleave", () => {
  if (!portrait.matches) {
    labels[2].style.visibility = "hidden";
  }
});

// document.getElementById("nav-point-edu").addEventListener("click", () => {
//   window.location.hash = "edu";
// });

document
  .getElementById("nav-point-hobby")
  .addEventListener("mouseenter", () => {
    if (!portrait.matches) {
      labels[3].style.visibility = "visible";
    }
  });

document
  .getElementById("nav-point-hobby")
  .addEventListener("mouseleave", () => {
    if (!portrait.matches) {
      labels[3].style.visibility = "hidden";
    }
  });

// document.getElementById("nav-point-hobby").addEventListener("click", () => {
//   window.location.hash = "hobby";
// });

document
  .getElementById("nav-point-contact")
  .addEventListener("mouseenter", () => {
    if (!portrait.matches) {
      labels[4].style.visibility = "visible";
    }
  });

document
  .getElementById("nav-point-contact")
  .addEventListener("mouseleave", () => {
    if (!portrait.matches) {
      labels[4].style.visibility = "hidden";
    }
  });

// document.getElementById("nav-point-contact").addEventListener("click", () => {
//   window.location.hash = "contact";
// });

function clickScrollIcon() {
  window.location.hash = "portfolio";
}

document
  .getElementById("scroll-div")
  .addEventListener("click", clickScrollIcon);

document.getElementById("hamburger").addEventListener("click", () => {
  label_arr.map((x) => (x.style.visibility = "visible"));
  $("#hamburger").fadeOut(200);
  $("#dark-bg").fadeIn(200);
  $("#glider").fadeIn(200);
  $("#nav").css("display", "flex").hide().fadeIn(200);
});

document.addEventListener("click", (e) => {
  if (portrait.matches) {
    if (e.target.id !== "hamburger-img") {
      $("#nav").fadeOut(200);
      $("#dark-bg").fadeOut(200);
      $("#glider").fadeOut(200);
      $("#hamburger").fadeIn(200);
      label_arr.map((x) => (x.style.visibility = "visible"));
    }
  }
});


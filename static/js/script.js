
let labels = document.getElementById("nav-labels").getElementsByTagName("div");

document.getElementById("nav-point-top").addEventListener("mouseenter", () => {
  labels[0].style.visibility = "visible";
});

document.getElementById("nav-point-top").addEventListener("mouseleave", () => {
  labels[0].style.visibility = "hidden";
});

document.getElementById("nav-point-top").addEventListener("click", () => {
  window.location.hash = "title";
});

document
  .getElementById("nav-point-portfolio")
  .addEventListener("mouseenter", () => {
    labels[1].style.visibility = "visible";
  });

document
  .getElementById("nav-point-portfolio")
  .addEventListener("mouseleave", () => {
    labels[1].style.visibility = "hidden";
  });

document.getElementById("nav-point-portfolio").addEventListener("click", () => {
  window.location.hash = "portfolio";
});

document.getElementById("nav-point-edu").addEventListener("mouseenter", () => {
  labels[2].style.visibility = "visible";
});

document.getElementById("nav-point-edu").addEventListener("mouseleave", () => {
  labels[2].style.visibility = "hidden";
});

document.getElementById("nav-point-edu").addEventListener("click", () => {
  window.location.hash = "edu";
});

document
  .getElementById("nav-point-hobby")
  .addEventListener("mouseenter", () => {
    labels[3].style.visibility = "visible";
  });

document
  .getElementById("nav-point-hobby")
  .addEventListener("mouseleave", () => {
    labels[3].style.visibility = "hidden";
  });

document.getElementById("nav-point-hobby").addEventListener("click", () => {
  window.location.hash = "hobby";
});

document
  .getElementById("nav-point-contact")
  .addEventListener("mouseenter", () => {
    labels[4].style.visibility = "visible";
  });

document
  .getElementById("nav-point-contact")
  .addEventListener("mouseleave", () => {
    labels[4].style.visibility = "hidden";
  });

document.getElementById("nav-point-contact").addEventListener("click", () => {
  window.location.hash = "contact";
});

document.getElementById("scroll-div").addEventListener("click", () => {
  window.location.hash = "portfolio";
});

fetch("/projects")
  .then((response) => response.json())
  .then((obj) => {
    obj.projects.forEach((project) => {
      if (project["link-to-code"]) {
        document
          .getElementById(`project-link-code-${project.idx}`)
          .addEventListener("click", () => {
            window.open(project["link-to-code"], "_blank");
          });
      }
      if (project["link-to-demo"]) {
        document
          .getElementById(`project-link-demo-${project.idx}`)
          .addEventListener("click", () => {
            window.open(project["link-to-demo"], "_blank");
          });
      }
    });
  });

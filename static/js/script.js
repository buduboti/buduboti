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

document.getElementById("nav-point-top").addEventListener("click", () => {
  window.location.hash = "title";
});

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

document.getElementById("nav-point-portfolio").addEventListener("click", () => {
  window.location.hash = "portfolio";
});

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

document.getElementById("nav-point-edu").addEventListener("click", () => {
  window.location.hash = "edu";
});

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

document.getElementById("nav-point-hobby").addEventListener("click", () => {
  window.location.hash = "hobby";
});

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

document.getElementById("nav-point-contact").addEventListener("click", () => {
  window.location.hash = "contact";
});

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
  $("#nav").css("display", "flex").hide().fadeIn(200);
});

document.addEventListener("click", (e) => {
  if (portrait.matches) {
    if (e.target.id !== "hamburger-img") {
      $("#nav").fadeOut(200);
      $("#dark-bg").fadeOut(200);
      $("#hamburger").fadeIn(200);
      label_arr.map((x) => (x.style.visibility = "visible"));
    }
  }
});

document.getElementById("ubb-link").addEventListener("click", () => {
  window.open("http://www.cs.ubbcluj.ro/en/", "_blank");
});

document.getElementById("bolyai-link").addEventListener("click", () => {
  window.open("https://bolyai.ro/index.php", "_blank");
});

document.getElementById("github-link").addEventListener("click", () => {
  window.open("https://github.com/buduboti/", "_blank");
});

document.getElementById("linkedin-link").addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/botond-barna-balás-11824baa/",
    "_blank"
  );
});

document.getElementById("message-info-name").value = "";
document.getElementById("message-info-comp-name").value = "";
document.getElementById("message-info-email").value = "";
document.getElementById("message-info-subject").value = "";
document.getElementById("message-info-msg").value = "";

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

fetch("/hobbies")
  .then((response) => response.json())
  .then((obj) => {
    obj.hobbies.forEach((hobby) => {
      let hobby_div = document.createElement("DIV");
      hobby_div.classList.add("hobby-div");
      hobby_div.id = `hobby-idx-${hobby.idx}`;
      let img = document.createElement("IMG");
      img.src = hobby["pic-path"];
      img.classList.add("hobby-pic");
      hobby_div.appendChild(document.createElement("DIV").appendChild(img));
      let info = hobby_div.appendChild(document.createElement("DIV"));
      info.classList.add("hobby-info");
      let title = document.createElement("DIV");
      title.classList.add("hobby-title");
      let h2 = document.createElement("H2");
      h2.innerHTML = hobby.name;
      title.appendChild(h2);
      if (hobby["link"]) {
        title.style.display = "flex";
        title.style.flexDirection = "row";
        let link = document.createElement("P");
        link.innerHTML = "[link]";
        link.classList.add("link");
        link.addEventListener("click", () => {
          window.open(hobby["link"], "_blank");
        });
        title.appendChild(link);
      }
      info.appendChild(title);
      let desc = document.createElement("DIV");
      desc.classList.add("hobby-desc");
      let par = document.createElement("P");
      par.innerHTML = hobby.description;
      desc.appendChild(par);
      info.appendChild(desc);

      document
        .getElementById(`hobby-column-${hobby.idx % 4}`)
        .appendChild(hobby_div);
    });
  });
function showSuccess() {
  document.getElementById("response").innerHTML =
    "The message has been sent successfully.";
  document.getElementById("response-field").style.borderColor =
    "rgba(100, 200, 100, 0.2)";
  document.getElementById("response-field").style.background =
    "rgba(100, 200, 100, 0.1)";
  document.getElementById("response-field").style.display = "block";
  setTimeout(function () {
    document.getElementById("response-field").style.opacity = 1;
  }, 100);
}

function showError(err) {
  document.getElementById("response").innerHTML = err;
  document.getElementById("response-field").style.borderColor =
    "rgba(200, 100, 100, 0.2)";
  document.getElementById("response-field").style.background =
    "rgba(200, 100, 100, 0.1)";
  document.getElementById("response-field").style.display = "block";
  setTimeout(function () {
    document.getElementById("response-field").style.opacity = 1;
  }, 100);
}

document
  .getElementById("message-info-name")
  .addEventListener("focusout", () => {
    let name = document.getElementById("message-info-name").value;
    if (!/^[a-zA-ZáäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ ]*$/g.test(name)) {
      document.getElementById("message-info-name").style.borderColor =
        "#804040";
    } else {
      document.getElementById("message-info-name").style.borderColor =
        "#FFFFFF";
    }
  });

document
  .getElementById("message-info-comp-name")
  .addEventListener("focusout", () => {
    let comp = document.getElementById("message-info-comp-name").value;
    if (!/^[a-zA-Z0-9,_\.\077\*\+\&\#\'\~\;\-\!\@\; ]*$/g.test(comp)) {
      document.getElementById("message-info-comp-name").style.borderColor =
        "#804040";
    } else {
      document.getElementById("message-info-comp-name").style.borderColor =
        "#FFFFFF";
    }
  });

document
  .getElementById("message-info-email")
  .addEventListener("focusout", () => {
    let email = document.getElementById("message-info-email").value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(email)) {
      document.getElementById("message-info-email").style.borderColor =
        "#804040";
    } else {
      document.getElementById("message-info-email").style.borderColor =
        "#FFFFFF";
    }
  });

document
  .getElementById("message-info-subject")
  .addEventListener("focusout", () => {
    let subject = document.getElementById("message-info-subject").value;
    if (!/^[a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ ]*$/g.test(subject)) {
      document.getElementById("message-info-subject").style.borderColor =
        "#804040";
    } else {
      document.getElementById("message-info-subject").style.borderColor =
        "#FFFFFF";
    }
  });

document.getElementById("message-info-msg").addEventListener("focusout", () => {
  let msg = document.getElementById("message-info-msg").value;
  if (
    !/^[a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ,_\.\077\*\+\&\#\'\~\;\-\!\@\; \n]*$/g.test(
      msg
    )
  ) {
    document.getElementById("message-info-msg").style.borderColor = "#804040";
  } else {
    document.getElementById("message-info-msg").style.borderColor = "#FFFFFF";
  }
});

document.getElementById("message-info-name").addEventListener("focusin", () => {
  document.getElementById("message-info-name").style.borderColor = "#408040";
});

document
  .getElementById("message-info-comp-name")
  .addEventListener("focusin", () => {
    document.getElementById("message-info-comp-name").style.borderColor =
      "#408040";
  });

document
  .getElementById("message-info-subject")
  .addEventListener("focusin", () => {
    document.getElementById("message-info-subject").style.borderColor =
      "#408040";
  });

document
  .getElementById("message-info-email")
  .addEventListener("focusin", () => {
    document.getElementById("message-info-email").style.borderColor = "#408040";
  });

document.getElementById("message-info-msg").addEventListener("focusin", () => {
  document.getElementById("message-info-msg").style.borderColor = "#408040";
});

function sendMessage() {
  let name = document.getElementById("message-info-name").value;
  let comp = document.getElementById("message-info-comp-name").value;
  let email = document.getElementById("message-info-email").value;
  let subject = document.getElementById("message-info-subject").value;
  let msg = document.getElementById("message-info-msg").value;

  if (!/^[a-zA-ZáäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ ]*$/g.test(name)) {
    showError(
      "The name field have to contain a-z A-Z characters (including áé...)."
    );
    return;
  }

  if (!/^[a-zA-Z0-9,_\.\077\*\+\&\#\'\~\;\-\!\@\; ]*$/g.test(comp)) {
    let illegal = comp.match(/[^a-zA-Z0-9,_\.\077\*\+\&\#\'\~\;\-\!\@\; ]/)[0];
    showError(
      "The company field does not fit for the requirements. " +
        `'${illegal}' is an illegal character`
    );
    return;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(email)) {
    showError("The email field does not fit for the requirements.");
    return;
  }

  if (!/^[a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ ]*$/g.test(subject)) {
    showError(
      "The subject field does not fit for the requirements. " +
        "Allowed characters : a-z, A-Z, 0-9, ' '"
    );
    return;
  }

  if (
    !/^[a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ,_\.\077\*\+\&\#\'\~\;\-\!\@\; \n]*$/g.test(
      msg
    )
  ) {
    let illegal = msg.match(
      /[^a-zA-Z0-9áäéëöőóíúüűÁÄÉËÖŐÓÍÚÜŰ,_\.\077\*\+\&\#\'\~\;\-\!\@\; \n]/
    )[0];
    showError(
      "The message does not fit for the requirements. " +
        `'${illegal}' is an illegal character`
    );
    return;
  }
  let data = { name, comp, email, subject, msg };
  fetch("/message", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((resp) => {
      if (resp.status === "ok") {
        console.log("Message sent");
        showSuccess();
      } else {
        showError(resp.err);
      }
      setTimeout(() => {
        document.getElementById("response-field").style.opacity = 0;
        setTimeout(() => {
          document.getElementById("response-field").style.display = "none";
        }, 1000);
      }, 3000);
    })
    .catch((err) => {
      showError(err);
      setTimeout(() => {
        document.getElementById("response-field").style.opacity = 0;
        setTimeout(() => {
          document.getElementById("response-field").style.display = "none";
        }, 1000);
      }, 3000);
    });
}

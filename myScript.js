const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((menu) => {
      menu.classList.remove("active");
    });

    link.classList.add("active");
  });
});

const issueSection = document.querySelector(".issue");
const issueNavLink = document.querySelector('a[href="#issue"]');

function playIssueAnimation() {
  issueSection.classList.remove("show");

  void issueSection.offsetWidth;

  issueSection.classList.add("show");
}

function showIssueAnimation() {
  const triggerPoint = window.innerHeight * 0.65;
  const issueTop = issueSection.getBoundingClientRect().top;

  if (issueTop < triggerPoint && !issueSection.classList.contains("show")) {
    issueSection.classList.add("show");
  }
}

issueNavLink.addEventListener("click", () => {
  setTimeout(() => {
    playIssueAnimation();
  }, 450);
});

window.addEventListener("scroll", showIssueAnimation);
window.addEventListener("load", showIssueAnimation);


const localCaseSection = document.querySelector(".local-case");
const localCaseNavLink = document.querySelector('a[href="#local-case"]');

function playLocalCaseAnimation() {
  localCaseSection.classList.remove("show");

  void localCaseSection.offsetWidth;

  localCaseSection.classList.add("show");
}

function showLocalCaseAnimation() {
  const triggerPoint = window.innerHeight * 0.65;
  const localCaseTop = localCaseSection.getBoundingClientRect().top;

  if (
    localCaseTop < triggerPoint &&
    !localCaseSection.classList.contains("show")
  ) {
    localCaseSection.classList.add("show");
  }
}

localCaseNavLink.addEventListener("click", () => {
  setTimeout(() => {
    playLocalCaseAnimation();
  }, 450);
});

window.addEventListener("scroll", showLocalCaseAnimation);
window.addEventListener("load", showLocalCaseAnimation);



const nextMaterialSection = document.querySelector(".next-material");
const nextMaterialNavLink = document.querySelector('a[href="#next-material"]');

function playNextMaterialAnimation() {
  nextMaterialSection.classList.remove("show");

  void nextMaterialSection.offsetWidth;

  nextMaterialSection.classList.add("show");
}

function showNextMaterialAnimation() {
  const triggerPoint = window.innerHeight * 0.65;
  const nextMaterialTop = nextMaterialSection.getBoundingClientRect().top;

  if (
    nextMaterialTop < triggerPoint &&
    !nextMaterialSection.classList.contains("show")
  ) {
    nextMaterialSection.classList.add("show");
  }
}

nextMaterialNavLink.addEventListener("click", () => {
  setTimeout(() => {
    playNextMaterialAnimation();
  }, 450);
});

window.addEventListener("scroll", showNextMaterialAnimation);
window.addEventListener("load", showNextMaterialAnimation);


const futureTrack = document.querySelector(".future-track");
const futureButtons = document.querySelectorAll(".future-btn");
const futurePrevBtn = document.querySelector(".future-arrow-left");
const futureNextBtn = document.querySelector(".future-arrow-right");

let futureCurrentIndex = 0;
const futureTotal = 6;
const futureContentWidth = 725;

function moveFutureSlide(index) {
  futureCurrentIndex = index;

  if (futureCurrentIndex < 0) {
    futureCurrentIndex = futureTotal - 1;
  }

  if (futureCurrentIndex >= futureTotal) {
    futureCurrentIndex = 0;
  }

  futureTrack.style.transform = `translateX(-${futureCurrentIndex * futureContentWidth}px)`;

  futureButtons.forEach((button, buttonIndex) => {
    const img = button.querySelector("img");

    button.classList.remove("active");

    if (buttonIndex === futureCurrentIndex) {
      button.classList.add("active");
      img.src = img.dataset.active;
    } else {
      img.src = img.dataset.normal;
    }
  });
}

futureButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    moveFutureSlide(index);
  });
});

futurePrevBtn.addEventListener("click", () => {
  moveFutureSlide(futureCurrentIndex - 1);
});

futureNextBtn.addEventListener("click", () => {
  moveFutureSlide(futureCurrentIndex + 1);
});

moveFutureSlide(0);



const actionSection = document.querySelector(".action");
const actionNavLink = document.querySelector('a[href="#action"]');

function playActionAnimation() {
  actionSection.classList.remove("show");

  void actionSection.offsetWidth;

  actionSection.classList.add("show");
}

function showActionAnimation() {
  const triggerPoint = window.innerHeight * 0.65;
  const actionTop = actionSection.getBoundingClientRect().top;

  if (
    actionTop < triggerPoint &&
    !actionSection.classList.contains("show")
  ) {
    actionSection.classList.add("show");
  }
}

actionNavLink.addEventListener("click", () => {
  setTimeout(() => {
    playActionAnimation();
  }, 450);
});

window.addEventListener("scroll", showActionAnimation);
window.addEventListener("load", showActionAnimation);
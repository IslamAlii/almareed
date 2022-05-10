let allCasses = document.getElementById("all-cases"),
  currentCases = document.getElementById("current-cases"),
  allCaravans = document.getElementById("all-caravans"),
  allMedicalDevolpment = document.getElementById("all-medical-development"),
  dropdown = document.querySelector(".dropdown"),
  dropdownMenu = document.querySelector(".dropdown-menu");

document.getElementById("hamburger-btn").onclick = function () {
  document.querySelector(".nav-ul").classList.toggle("active");
};

dropdown.addEventListener("mouseover", () => {
  dropdownMenu.classList.add("active");
});

dropdown.addEventListener("mouseleave", () => {
  dropdownMenu.classList.remove("active");
});

dropdown.onclick = () => {
  document.querySelector(".small-screen-menu").classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > document.querySelector(".counter").offsetTop - 500) {
    setInterval(() => {
      Number(allCasses.innerText) >= allCasses.getAttribute("data-goal")
        ? (allCasses.innerText = allCasses.getAttribute("data-goal"))
        : (allCasses.innerText =
            Number(allCasses.innerText) +
            (Number(allCasses.getAttribute("data-goal")) / 100) * 1);

      Number(currentCases.innerText) >= currentCases.getAttribute("data-goal")
        ? (currentCases.innerText = currentCases.getAttribute("data-goal"))
        : (currentCases.innerText =
            Number(currentCases.innerText) +
            (Number(currentCases.getAttribute("data-goal")) / 100) * 1);

      Number(allCaravans.innerText) >= allCaravans.getAttribute("data-goal")
        ? (allCaravans.innerText = allCaravans.getAttribute("data-goal"))
        : (allCaravans.innerText =
            Number(allCaravans.innerText) +
            (Number(allCaravans.getAttribute("data-goal")) / 100) * 1);

      Number(allMedicalDevolpment.innerText) >=
      allMedicalDevolpment.getAttribute("data-goal")
        ? (allMedicalDevolpment.innerText =
            allMedicalDevolpment.getAttribute("data-goal"))
        : (allMedicalDevolpment.innerText =
            Number(allMedicalDevolpment.innerText) +
            (Number(allMedicalDevolpment.getAttribute("data-goal")) / 100) * 1);
    }, 300);
  }
};

let goalNumber = document.querySelectorAll(".goal-number");
let raisedNumber = document.querySelectorAll(".raised-number");
let percentage = document.querySelectorAll(".current-casses-percentage");
let inner = document.querySelectorAll(".current-cases-inner");

percentage.forEach((e, i) => {
  inner[i].style.width = `${Math.round(
    (Number(raisedNumber[i].innerText) / Number(goalNumber[i].innerText)) * 100
  )}%`;
  e.innerText = `${Math.round(
    (Number(raisedNumber[i].innerText) / Number(goalNumber[i].innerText)) * 100
  )}%`;
});

// git

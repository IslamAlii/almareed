let allCasses = document.getElementById("all-cases"),
  currentCases = document.getElementById("current-cases"),
  allCaravans = document.getElementById("all-caravans");

document.getElementById("hamburger-btn").onclick = function () {
  document.getElementById("nav-ul").classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > document.querySelector(".counter").offsetTop - 500) {
    setInterval(() => {
      Number(allCasses.innerText) >= allCasses.getAttribute("data-goal")
        ? (allCasses.innerText = allCasses.getAttribute("data-goal"))
        : (allCasses.innerText = Number(allCasses.innerText) + 100);

      Number(currentCases.innerText) >= currentCases.getAttribute("data-goal")
        ? (currentCases.innerText = currentCases.getAttribute("data-goal"))
        : (currentCases.innerText = Number(currentCases.innerText) + 1);

      Number(allCaravans.innerText) >= allCaravans.getAttribute("data-goal")
        ? (allCaravans.innerText = allCaravans.getAttribute("data-goal"))
        : (allCaravans.innerText = Number(allCaravans.innerText) + 10);
    }, 250);
  }
};

let slides = document.querySelectorAll(".carusol-slide img");
counter = 0;
document.querySelector(".next").onclick = () => {
  slides[counter].style.marginLeft = "-800px";
  counter++;
};

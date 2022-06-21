let slideIndex = 1;
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");

//Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


nextArrow.addEventListener("click", plusSlides(1));
prevArrow.addEventListener("click", plusSlides(-1));

showSlides(slideIndex);

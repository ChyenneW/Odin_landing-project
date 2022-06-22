let slideIndex = 1;
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");

//Next/previous controls
function plusSlides(n) {
  //showSlides((slideIndex += n));
  getImageSrc((slideIndex += n));
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


function getImageSrc(n) {
  let imageSrc = document.getElementById('slide-image');
  let imageName = ["one", "two", "three", "four", "five", "six", "seven"]
  let imageLocation = `./images/slideshow/${imageName[slideIndex - 1]}.jpeg`;


  let slideNumber = ["1/7", "2/7", "3/7", "4/7", "5/7", "6/7", "7/7"]

  if (n > imageName.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = imageName.length;
  }

  imageSrc.setAttribute = ('src', `./images/slideshow/${imageLocation}.jpeg`);
  document.getElementsByClassName('slide-number').innerHTML = slideNumber[slideIndex - 1];

  console.log(imageName[slideIndex - 1]);
  console.log(slideNumber[slideIndex - 1]);
  console.log(imageLocation);
}


nextArrow.addEventListener("click", plusSlides(1));
prevArrow.addEventListener("click", plusSlides(-1));


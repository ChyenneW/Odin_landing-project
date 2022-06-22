let slideIndex = 1;
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");

//Next/previous controls
function plusSlides(n) {
  getImageSrc((slideIndex += n));
}


function getImageSrc(n) {
  const imageSrc = document.getElementById('slide-image');
  let imageName = ["one", "two", "three", "four", "five", "six", "seven"]

  const docSlideNumber = document.getElementById('slide-number');
  let slideNumber = ["1/7", "2/7", "3/7", "4/7", "5/7", "6/7", "7/7"]

  if (n > imageName.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = imageName.length;
  }

  imageSrc.src = `./images/slideshow/${imageName[slideIndex - 1]}.jpeg`;
  docSlideNumber.innerHTML = slideNumber[slideIndex - 1];

  console.log(imageName[slideIndex - 1]);
  console.log(slideNumber[slideIndex - 1]);
}


nextArrow.addEventListener("click", plusSlides(1));
prevArrow.addEventListener("click", plusSlides(-1));


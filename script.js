

let slideIndex = 0;
showSlides();

// Automatic slide change every 4 seconds
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  
  setTimeout(showSlides, 1000); // Change image every 4 seconds
}

// Show specific slide when dot is clicked
function currentSlide(n) {
  slideIndex = n;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  slides[n - 1].style.display = "block";
  dots[n - 1].classList.add("active");
}
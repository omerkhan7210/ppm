// Script Goes Here...
const leftSlide_collab = document.querySelector(".left-slides_collab");
const rightSlide_collab = document.querySelector(".right-slides_collab");
const leftBtn_collab = document.querySelector(".left-btn_collab");
const rightBtn_collab = document.querySelector(".right-btn_collab");
const slidesLength_collab = leftSlide_collab.querySelectorAll(".slide_collab").length;

let currentSlide_collab = 0;

rightSlide_collab.style.transform = `translateY(-${(slidesLength_collab - 1) * 100}%)`;

leftBtn_collab.addEventListener("click", () => changeSlide("left"));
rightBtn_collab.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
  if (btn == "right") {
    currentSlide_collab++;

    if (currentSlide_collab > slidesLength_collab - 1) {
      currentSlide_collab = 0;
    }
  } else if (btn == "left") {
    currentSlide_collab--;

    if (currentSlide_collab < 0) {
      currentSlide_collab = slidesLength_collab - 1;
      rightSlide_collab.style.transform = `translateY(-${
        (slidesLength_collab - 1 - currentSlide_collab) * 100
      }%)`;
      leftSlide_collab.style.transform = `translateY(-${currentSlide_collab * 100}%)`;
    }
  }

  rightSlide_collab.style.transform = `translateY(-${
    (slidesLength_collab - 1 - currentSlide_collab) * 100
  }%)`;
  leftSlide_collab.style.transform = `translateY(-${currentSlide_collab * 100}%)`;
}

setInterval(autoChangeSlide, 5000);

function autoChangeSlide() {
  currentSlide_collab++;

  if (currentSlide_collab > slidesLength_collab - 1) {
    currentSlide_collab = 0;
  }

  rightSlide_collab.style.transform = `translateY(-${
    (slidesLength_collab - 1 - currentSlide_collab) * 100
  }%)`;
  leftSlide_collab.style.transform = `translateY(-${currentSlide_collab * 100}%)`;
}

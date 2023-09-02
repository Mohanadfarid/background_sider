const body = document.body;
const leftBtn = document.getElementById("left_btn");
const rightBtn = document.getElementById("right_btn");
const slides = document.querySelectorAll(".slide");

let active_slide_index = 0;

rightBtn.addEventListener("click", () => {
  active_slide_index++;
  if (active_slide_index > slides.length - 1) {
    active_slide_index = 0;
  }
  set_body_backGround();
  set_active_class_based_on_index();
});

leftBtn.addEventListener("click", () => {
  active_slide_index--;
  if (active_slide_index < 0) {
    active_slide_index = slides.length - 1;
  }
  set_body_backGround();
  set_active_class_based_on_index();
});

const set_body_backGround = () => {
  body.style.backgroundImage = slides[active_slide_index].style.backgroundImage;
};

const set_active_class_based_on_index = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[active_slide_index].classList.add("active");
};

set_body_backGround();

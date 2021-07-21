const burger = document.querySelector(".burger");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const menu = document.querySelector(".linq");
const custom = document.querySelector(".demo");

burger.addEventListener("click", () => {
  one.classList.toggle("active");
  two.classList.toggle("active");
  three.classList.toggle("active");
  four.classList.toggle("active");
  five.classList.toggle("active");
  six.classList.toggle("active");
  menu.classList.toggle("active");
});
custom.addEventListener("click", () => {
  custom.classList.toggle("done");
});

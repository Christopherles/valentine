window.onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const letter = document.querySelector(".letter");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  wrapper.classList.add("open");
  letter.classList.add("show");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("open");
  letter.classList.remove("show");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
});

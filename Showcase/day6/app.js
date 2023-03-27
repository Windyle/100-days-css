document.getElementById("profile-pic").addEventListener("mouseover", () => {
  const elements = document.getElementsByClassName("pic-border");

  elements[0].classList.add("rotate");
  elements[1].classList.add("rotate");
});

document.getElementById("profile-pic").addEventListener("mouseleave", () => {
  const elements = document.getElementsByClassName("pic-border");

  elements[0].classList.remove("rotate");
  elements[1].classList.remove("rotate");
});

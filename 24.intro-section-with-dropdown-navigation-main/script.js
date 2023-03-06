console.log("Hello world");
const backdrop = document.querySelector(".backdrop");
const menuIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector("nav");

menuIcon.addEventListener("click", menuAction);
backdrop.addEventListener("click", menuAction);

function menuAction(e) {
  let isOpen = false;
  let menu = menuIcon;

  console.log(menu.classList);

  if (Array.from(menu.classList).find((item) => item == "is-open")) {
    isOpen = true;
  }

  if (isOpen) {
    menu.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    navigation.classList.remove("is-open");
    menu.src = "images/icon-menu.svg";
  } else {
    menu.classList.add("is-open");
    backdrop.classList.add("is-open");
    navigation.classList.add("is-open");
    menu.src = "images/icon-close-menu.svg";
  }
}

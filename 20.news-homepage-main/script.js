console.log("Hello World");

const backdrop = document.querySelector(".backdrop");
const menuIcon = document.querySelector(".menu-icon.open");
const menuCloseIcon = document.querySelector(".menu-icon.close");
const mobileMenu = document.querySelector(".mobile-menu");

backdrop.addEventListener("click", closeMenu);
menuCloseIcon.addEventListener("click", closeMenu);
menuIcon.addEventListener("click", openMenu);

function openMenu(e) {
  e.preventDefault();
  if (!mobileMenu) return;

  mobileMenu.classList.add("visible");

  console.log("Open Menu");
}

function closeMenu(e) {
  e.preventDefault();

  if (!mobileMenu) return;

  mobileMenu.classList.remove("visible");

  console.log("Close menu");
}

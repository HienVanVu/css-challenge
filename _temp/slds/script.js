console.log("Hello world");
// combobox section
const container = document.querySelector(".slds-combobox");
const button = document.querySelector(".slds-combobox__input");
const items = document.querySelectorAll(".slds-listbox__item");
let blurTimeout; // Define a variable to hold the timeout
button.addEventListener("click", (e) => {
  const input = e.target;
  if (container.classList.contains("slds-is-open")) {
    container.classList.remove("slds-is-open");
  } else {
    container.classList.add("slds-is-open");
  }
  button.setAttribute("aria-expanded", true);
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("in li", e.currentTarget.dataset.id);

    // Trigger blur event immediately
    button.blur();
    button.setAttribute("aria-expanded", false);
  });
});

button.addEventListener("blur", (e) => {
  // Add a delay to prevent blur event from immediately triggering after clicking on an item
  blurTimeout = setTimeout(() => {
    container.classList.remove("slds-is-open");
  }, 250);
});
// end combobox section

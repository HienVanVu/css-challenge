console.log("Hello world");
// combobox section
const container = document.querySelector(".slds-combobox");
const button = document.querySelector(".slds-combobox__input");
const items = document.querySelectorAll(".slds-listbox__item");
button.addEventListener("click", (e) => {
  const input = e.target;
  container.classList.add("slds-is-open");
  //   button.setAttribute("aria-expanded", true);
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("click iem", e.target.querySelector(".slds-truncate")?.dataset.id);
  });
});

button.addEventListener("blur", (e) => {
  setTimeout(() => {
    const input = e.target;
    container.classList.remove("slds-is-open");
  }, 100);
});
// end combobox section

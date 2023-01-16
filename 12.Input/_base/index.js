const input = document.querySelector("input");
const focusBorder = document.querySelector(".focus-border");

input.addEventListener("blur", validate);
input.addEventListener("keyup", validate);

function validate(e) {
  console.log("validate |" + e.target.value + "|");
  if (!e.target.value) {
    e.target.setCustomValidity("Name must be required.");
    e.target.reportValidity();
    focusBorder.style["background-color"] = "red";
  } else if (e.target.value.length < 2) {
    e.target.setCustomValidity("Name must be more than 2 characters.");
    e.target.reportValidity();
    focusBorder.style["background-color"] = "red";
  } else {
    e.target.setCustomValidity("");
    e.target.reportValidity();
    focusBorder.style["background-color"] = "#3399ff";
  }
}

let ERROR_BLANK = "{field} can not be empty";
let ERROR_INVALID_MAIL = "Email is not valid";

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("a.submit");
let parent;
let errorMsg;
let err;
console.log(inputs);
console.log(submitBtn);

submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();

  inputs.forEach((input) => {
    parent = input.parentNode;
    errorMsg = parent.querySelector(".error-msg");
    if (isBlank(input?.value)) {
      parent?.classList.add("invalid");
      err = ERROR_BLANK.replace("{field}", input.placeholder);
      errorMsg.innerHTML = err;
      return;
    } else if (input.type === "email" && !isValidEmail(input.value)) {
      parent?.classList.add("invalid");
      errorMsg.innerHTML = ERROR_INVALID_MAIL;
    } else {
      parent?.classList.remove("invalid");
      errorMsg.innerHTML = "";
    }
  });
}
function isBlank(value) {
  if (!value) return true;

  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

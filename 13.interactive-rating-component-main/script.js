console.log("Hello World");

const stars = Array.from(document.querySelectorAll(".rate"));
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const submitBtn = document.querySelector(".submit-btn");
const ratedMsg = document.querySelector(".rated");

stars.forEach((item) => {
  item.addEventListener("click", rate);
});

submitBtn.addEventListener("click", rateHandle);

function rate(e) {
  let star = e.target.dataset.value;

  if (!star) return;

  stars.forEach((element) => {
    if (element.dataset.value === star) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  });
}

function rateHandle(e) {
  e.preventDefault();
  let star;
  stars.forEach((element) => {
    if (element.classList.contains("selected")) star = element.dataset.value;
  });
  if (!star) return;

  ratedMsg.innerHTML = `You selected ${star} out of 5`;
  rating.classList.add("hidden");
  thanks.classList.remove("hidden");
}

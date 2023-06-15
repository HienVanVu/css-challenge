console.log("Hello world");

const bill = document.querySelector("#bill-amount");
const people = document.querySelector("#people-amount");
const customTip = document.querySelector("#tip-amount");

const tips = document.getElementsByName("percentage");

let billAmount, peopleAmount, tipAmount;

bill.addEventListener("keyup", (event) => {
  billAmount = event.target.value;
  calculateBill();
});

people.addEventListener("keyup", (event) => {
  peopleAmount = +event.target.value;
  calculateBill();
});

tips.forEach((tip) => {
  tip.addEventListener("click", (event) => {
    let tempTip = event.target.value;
    if (tempTip === "custom") {
      return;
    }
    tipAmount = tempTip;
    calculateBill();
  });
});

customTip.addEventListener("keyup", (event) => {
  tipAmount = event.target.value;
  calculateBill();
});

function calculateBill() {
  if (!billAmount || !peopleAmount || !tipAmount) {
    return;
  }
  console.log("calculate bill", billAmount, peopleAmount, tipAmount);
}

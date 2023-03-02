console.log("hello world");

const savingPlan = document.querySelector(".saving-plan");
const totalMoney = document.querySelector(".overview .total .money");
const maxHeight = 300;
let maxAmount = 0;
let totalAmount = 0;

// Load the JSON file using fetch
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      if (maxAmount < element.amount) maxAmount = element.amount;
      totalAmount += +element.amount;
    });

    totalMoney.innerHTML = `$${totalAmount.toFixed(2)}`;

    data.forEach((element) => {
      const day = document.createElement("p");
      day.textContent = element.day;
      day.classList.add(("day", "oppacity"));

      const column = document.createElement("div");
      column.classList.add("column");

      if (element.amount == maxAmount) column.classList.add("hightest");
      column.style = `--height: ${(maxHeight * (element.amount / maxAmount)).toFixed(2)}px`;

      const money = document.createElement("p");
      money.textContent = `$${element.amount.toFixed(2)}`;
      money.classList.add("money");

      const item = document.createElement("div");
      item.classList.add("item");

      item.append(money, column, day);

      savingPlan.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

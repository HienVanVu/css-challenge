const NUMBER_OF_DISPLAYED_ITEM = 3;
const GAP = 20;

let container = document.getElementsByClassName("container");
let moveItems = document.getElementsByClassName("move__item");
let moveSection = document.getElementsByClassName("move-section");
let moveContainer = document.getElementsByClassName("move-container");

const NUMBER_OF_ITEM = moveItems.length;
let itemWidth =
  (container[0].offsetWidth - GAP * (NUMBER_OF_DISPLAYED_ITEM - 1)) /
  NUMBER_OF_DISPLAYED_ITEM;
moveContainer[0].style.width = container[0].offsetWidth + "px";
moveSection[0].style.width =
  itemWidth * NUMBER_OF_ITEM + GAP * (NUMBER_OF_ITEM - 1) + "px";
Array.from(moveItems).forEach((element) => {
  element.style.width = itemWidth + "px";
});

let currentItem = 0;

function doToLeft() {
  if (currentItem < NUMBER_OF_ITEM - 3) {
    currentItem++;
    moveSection[0].style.transform = `translateX(-${
      currentItem * itemWidth + GAP * currentItem
    }px)`;
  } else {
    currentItem = 0;
    moveSection[0].style.transform = `translateX(0)`;
  }
}

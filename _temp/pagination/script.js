/**
 * main item need to run in lwc:
 * displayedItems,
 * itemsPerPage,
 * totalItem,
 * totalPages,
 * numberOfPaging,
 * generateMenu()
 * updateActivePage()
 * changePageHandler()
 */

// Log a message to the console
console.log("Hello world");

// Get the pagination container element and the number section element within it
const pagination = document.querySelector(".paging");
const numberSection = pagination.querySelector(".number-section");

// Declare variables for storing the pagination links and the number of number links to display
let links;
let numberLinks;

// Declare an array for storing the page numbers to display in the number section
let displayedItems = [];

// Declare constants for the number of items per page and the total number of items
const itemsPerPage = 2;
const totalItem = 10;

// Calculate the total number of pages based on the number of items and items per page
const totalPages = Math.ceil(totalItem / itemsPerPage);

// Calculate the number of paging buttons to display
const numberOfPaging = totalPages < 4 ? totalPages : 4;

// Initialize the current page to 1, display the initial set of items, and generate the initial DOM elements
let currentPage = 1;
generateMenu(false);
generateDOM(1);

// Function to display the items for the current page
function generateMenu(toLeft) {
  // Check if the current page is already in the displayedItems array, and if so, return false
  let isCurrerntInPage = displayedItems.indexOf(currentPage) != -1;
  if (isCurrerntInPage) return false;

  // Clear the displayedItems array and populate it with the appropriate page numbers based on the current page and the number of paging buttons to display
  displayedItems = [];
  if (currentPage + numberOfPaging > totalPages) {
    for (let i = totalPages - numberOfPaging; i < totalPages; i++) {
      displayedItems.push(i + 1);
    }
  } else if (currentPage - numberOfPaging < 0) {
    for (let i = 0; i < numberOfPaging; i++) {
      displayedItems.push(i + 1);
    }
  } else {
    for (let i = 0; i < numberOfPaging; i++) {
      displayedItems.push(toLeft ? currentPage - numberOfPaging + i : currentPage + i);
    }
  }

  // Log the displayedItems array to the console and return true
  console.log(displayedItems);
  return true;
}

// Function to update the active page link based on the current page
function updateActivePage() {
  let inPage = false;

  // Loop through all the number links and add the "is-active" class to the link for the current page, or remove it from other links
  for (let i = 0; i < numberLinks.length; i++) {
    if (+numberLinks[i].dataset.page == currentPage) {
      numberLinks[i].classList.add("is-active");
      inPage = true;
    } else {
      numberLinks[i].classList.remove("is-active");
    }
  }

  return inPage;
}

// Function to handle the pagination button clicks
function changePageHandler(e) {
  console.log("changePageHandler");
  // Get the type of button clicked (e.g. "first", "previous", "next", etc.)
  let type = e.target.dataset.type;

  // Determine if the active page should be to the left or right of the current page
  let toLeft = true;

  // Update the current page based on the button clicked
  if (type == "first") {
    currentPage = 1;
    toLeft = false;
  } else if (type == "previous") {
    if (currentPage == 1) return;
    currentPage--;
    toLeft = true;
  } else if (type == "number") {
    currentPage = +e.target.dataset.page;
  } else if (type == "next") {
    if (currentPage == totalPages) return;
    currentPage++;
    toLeft = false;
  } else if (type == "last") {
    currentPage = totalPages;
    toLeft = true;
  }

  console.log("currentPage", currentPage);

  // Update the active page in the UI
  let inPage = updateActivePage();

  // If the active page is already in the displayed page links, do nothing
  // Otherwise, generate new page links and update the UI
  if (inPage || !generateMenu(toLeft)) return;

  generateDOM(currentPage);
}

// Function to generate the pagination buttons and update the active page
function generateDOM(selected) {
  // Clear the current pagination buttons
  numberSection.innerHTML = "";

  // Loop through the displayed items and create a button for each
  for (let i = 0; i < numberOfPaging; i++) {
    let span = document.createElement("span");
    span.setAttribute("data-type", "number");
    if (selected == displayedItems[i]) {
      span.classList.add("is-active");
    }
    span.setAttribute("data-page", displayedItems[i]);
    span.innerHTML = displayedItems[i];
    numberSection.appendChild(span);
  }

  // Update the numberLinks and links variables
  numberLinks = numberSection.querySelectorAll("span");
  links = pagination.querySelectorAll("span");

  // Add a click event listener to each pagination link, which will call the changePageHandler function when clicked
  Array.from(links).forEach((span) => {
    span.addEventListener("click", changePageHandler);
  });
}

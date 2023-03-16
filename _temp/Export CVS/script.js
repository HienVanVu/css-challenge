// Logs the string "Hello World" to the console
console.log("Hello World");

// An array of strings representing the desired order of columns in the CSV file
const order = ["id", "name"];

// An array of objects representing the mapping of column names to keys in the data array
const mappingLabel = [{ name: "Name", id: "ID" }];

// An array of objects representing the data to be exported as a CSV file
const data = [
  {
    id: 1,
    // name: "Hello 1", - This object is missing the "name" key
  },
  {
    id: 2,
    name: "Hello 2",
  },
];

// Merges the mappingLabel and data arrays into a new array
let merge = [...mappingLabel, ...data];

// An empty array that will store the rows of data in the CSV file
let rows = [
  //   ["name1", "city1", "some other info"], - Example row
  //   ["name2", "city2", "more info"], - Example row
];

// Loops through each item in the merge array
merge.forEach((item) => {
  // An empty array that will store the values for each row in the CSV file
  let arr = [];
  // Loops through each label in the order array
  order.forEach((label) => {
    // If the current item has a property with the same name as the current label, push its value to the arr array
    // Otherwise, push an empty string
    arr.push(item[label] ? item[label] : "");
  });

  // Pushes the arr array to the rows array
  rows.push(arr);
});

// Logs the rows array to the console
console.log(rows);

// Selects the HTML element with an ID of "export-csv" and assigns it to a variable btn
const btn = document.querySelector("#export-csv");

// Attaches a click event listener to the btn element and calls the exportCSV() function
btn.addEventListener("click", exportCSV);

// Defines the exportCSV() function that takes an event object as a parameter
function exportCSV(e) {
  // Maps the rows array into a comma-separated string and joins the elements using the newline character
  let csvContent = "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");

  // Encodes the CSV content URI using the encodeURI() function and opens a new window with the encoded URI using the window.open() function
  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);

  // for LWC
  // // Creating anchor element to download
  // let downloadElement = document.createElement("a");

  // // This  encodeURI encodes special characters, except: , / ? : @ & = + $ # (Use encodeURIComponent() to encode these characters).
  // downloadElement.href = "data:text/csv;charset=utf-8," + encodeURI(csvContent);
  // downloadElement.target = "_self";
  // // CSV File Name
  // downloadElement.download = "download.csv";
  // // below statement is required if you are using firefox browser
  // document.body.appendChild(downloadElement);
  // // click() Javascript function to download CSV file
  // downloadElement.click();
}

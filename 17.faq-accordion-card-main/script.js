const details = document.querySelectorAll("details");

details.forEach((item) => {
  item.addEventListener("toggle", (event) => {
    if (item.open) {
      details.forEach((element) => {
        if (element.id != item.id) {
          element.removeAttribute("open");
        }
      });
    }
  });
});

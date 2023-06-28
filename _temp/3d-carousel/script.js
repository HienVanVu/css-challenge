// external js: flickity.pkgd.js

var $carousel = $(".carousel").flickity();

$carousel.on("select.flickity", function (event, index) {
  console.log("Flickity select " + index);
});

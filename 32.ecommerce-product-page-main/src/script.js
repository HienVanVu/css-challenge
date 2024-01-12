console.log("Hello shop");

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");
const closeMenu = document.querySelector(".navigation__close");
const productImagelst = document.querySelectorAll(".product__image__item");
const productMainImage = document.querySelector(".product__image__main img");
const mappingThumbnail = {
    "http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg": "http://127.0.0.1:5500/images/image-product-1.jpg",
    "http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg": "http://127.0.0.1:5500/images/image-product-2.jpg",
    "http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg": "http://127.0.0.1:5500/images/image-product-3.jpg",
    "http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg": "http://127.0.0.1:5500/images/image-product-4.jpg",
};
const productCompany = document.querySelector(".product__detail__company p");
const productName = document.querySelector(".product__detail__name p");
const productDescription = document.querySelector(".product__detail_description p");
const productSalePrice = document.querySelector(".product__detail__price__sale p");
const productSalePercent = document.querySelector(".product__detail__price__percent p");
const productOriginPrice = document.querySelector(".product__detail__price__origin p");

const productDetail = {
    companyName: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    salePrice: "$125.00",
    salePercent: "50%",
    originPrice: "$250.00",
};

productCompany.innerHTML = productDetail.companyName;
productName.innerHTML = productDetail.productName;
productDescription.innerHTML = productDetail.description;
productSalePrice.innerHTML = productDetail.salePrice;
productSalePercent.innerHTML = productDetail.salePercent;
productOriginPrice.innerHTML = productDetail.originPrice;

hamburgerMenu.addEventListener("click", () => {
    if (!navigation.classList.contains("is-open")) {
        navigation.classList.add("is-open");
    }
});

closeMenu.addEventListener("click", () => {
    if (navigation.classList.contains("is-open")) {
        navigation.style.animation = "toLeft 0.4s forwards";
        let timer = setTimeout(() => {
            navigation.style.animation = "";
            navigation.classList.remove("is-open");

            clearTimeout(timer);
        }, 500);
    }
});

productImagelst.forEach((item) => {
    item.addEventListener("click", (e) => {
        productMainImage.src = mappingThumbnail[e.target.src];
        productImagelst.forEach((item) => {
            item.classList.remove("selected");
        });
        e.target.classList.add("selected");
    });
});

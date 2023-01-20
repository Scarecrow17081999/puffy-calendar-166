let product = JSON.parse(localStorage.getItem("product")) || [];
let image = document.querySelector(".product-image img");
let name = document.querySelector(".col-sm-7-desc>div>h4");
let price = document.getElementById("price");

image.src = product.image;
name.innerText = product.Name;
price.innerText = product.price;

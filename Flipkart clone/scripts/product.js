let product = JSON.parse(localStorage.getItem("product")) || [];
let image = document.querySelector(".product-image img");
let name = document.querySelector(".col-sm-7-desc>div>h4");
let price = document.getElementById("price");




image.src = product.image;
name.innerText = product.Name;
price.innerText = product.price;

let lsArray =JSON.parse(localStorage.getItem("cart_items"))||[];

let buy_now_button = document.querySelector(".button-div>button:nth-child(1)");

buy_now_button.addEventListener("click", () => {
    
    if(checkArray(lsArray)){
        lsArray.push(product)
        alert("product added to cart")
        localStorage.setItem("cart_items",JSON.stringify(lsArray))
        console.log(lsArray);
        console.log( localStorage.getItem("cart_items"));
  }else{
    alert("product already added")
        console.log(lsArray);
        console.log( localStorage.getItem("cart_items"));
  }
});

checkArray = (lsArray) => {
  for (let i = 0; i < lsArray.length; i++) {
    if (lsArray[i].id === product.id) {
      return false;
    }
  }
  return true;
};


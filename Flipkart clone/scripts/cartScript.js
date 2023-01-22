let body = document.querySelector(".product-container");
let amount_banner = document.querySelector(
  "#total_amount>div:nth-child(3)>div:nth-child(2)"
);
let place_order_button = document.querySelector("#place_order>button");
let total_amount = document.querySelector(
  "#total_amount>div:nth-child(7)>div:nth-child(2)"
);
let cartItems = JSON.parse(localStorage.getItem("cart_items")) || [];

// console.log(amount_banner.innerHTML);

display_function = (cartItems) => {
  body.innerHTML = "";
  cartItems.forEach((element, index) => {
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div2_1 = document.createElement("div");
    let detail1 = document.createElement("p");
    let detail2 = document.createElement("p");
    let img = document.createElement("img");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let Save_for_later = document.createElement("button");
    let remove = document.createElement("button");
    let increment = document.createElement("button");
    let decrement = document.createElement("button");
    let amount = document.createElement("input");
    amount.value = element.quantity;

    div2_1.setAttribute("class", "cart-remove-button");
    div.addEventListener("click", () => {});
    img.setAttribute("class", "list_image");

    increment.addEventListener("click", () => {
      element.quantity++;
      localStorage.setItem("cart_items", JSON.stringify(cartItems));
      display_function(cartItems);
    });
    decrement.addEventListener("click", () => {
      if (amount.value > 1) {
        element.quantity--;
        localStorage.setItem("cart_items", JSON.stringify(cartItems));
        display_function(cartItems);
      }
    });
    remove.addEventListener("click", () => {
        let x = cartItems.filter((el)=>{
            // return cartItems.element!==element
            return (element.id!=el.id);
        })
        console.log(x);
        display_function(x)
          localStorage.setItem("cart_items", JSON.stringify(x));

    });

    let amount_div = document.createElement("div");
    detail1.innerText = element.Name;
    span1.innerText = `₹${element.price}`;
    span2.textContent = " | 56% Off 3 offers applied";
    img.src = element.image;
    Save_for_later.innerText = "SAVE FOR LATER";
    remove.innerHTML = "REMOVE";
    increment.innerText = "+";
    decrement.innerText = "-";
    amount_div.append(decrement, amount, increment);
    detail2.append(span1, span2);
    div2_1.append(Save_for_later, remove);
    div1.append(img);
    div2.append(detail1, detail2, div2_1);
    div.append(div1, div2);
    body.append(div, amount_div);
  });
};
display_function(cartItems);
total();
function total() {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    sum += Number(cartItems[i].price) * Number(cartItems[i].quantity);
  }
  amount_banner.innerText = `₹ ${sum}`;
  total_amount.innerText = `₹ ${sum}`;
}

place_order_button.addEventListener("click", () => {
  console.log("lol");
});
place_order = () => {};

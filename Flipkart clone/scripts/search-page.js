
//PRODUCT DATABASE
let productLsdata;

ProductData = [
  {
    Name: "Tops",
    image: "./scripts/Products/Ankle Tops.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.5,
    price: "1600",
    id: 1,
    quantity: 1,
  },
  {
    Name: "Heels",
    image: "./scripts/Products/Heels.jpg",
    range: "₹500-1000",
    type: "Accessories",
    rating: 3.2,
    price: "16000",
    id: 2,
    quantity: 1,
  },
  {
    Name: "Bycycles",
    image: "./scripts/Products/Bycycle.webp",
    range: "₹500-700",
    type: "vehicles",
    rating: 4.6,
    price: "17000",
    id: 3,
    quantity: 1,
  },
  {
    Name: "Cabinet",
    image: "./scripts/Products/Cabinets.jpeg",
    range: "₹500-700",
    type: "furniture",
    rating: 4.4,
    price: "4500",
    id: 4,
    quantity: 1,
  },
  {
    Name: "Camera",
    image: "./scripts/Products/camera.webp",
    range: "₹500-700",
    type: "gadgets",
    rating: 2.5,
    price: "1300",
    id: 5,
    quantity: 1,
  },
  {
    Name: "Cargo",
    image: "./scripts/Products/Cargos.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.6,
    price: "1500",
    id: 6,
    quantity: 1,
  },
  {
    Name: "Tops",
    image: "./scripts/Products/Caseroles.webp",
    range: "₹500-700",
    type: "Kitchen accessories",
    rating: 2.9,
    price: "16000",
    id: 7,
    quantity: 1,
  },
  {
    Name: "Shirt",
    image: "./scripts/Products/Check shirts (2).jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 5,
    price: "13000",
    id: 8,
    quantity: 1,
  },
  {
    Name: "shirt",
    image: "./scripts/Products/Check shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.9,
    price: "500",
    id: 9,
    quantity: 1,
  },
  {
    Name: "Cooling Pad",
    image: "./scripts/Products/Cooling Pads.jpeg",
    range: "₹500-700",
    type: "Gadgets",
    rating: 2.8,
    price: "1200",
    id: 10,
    quantity: 1,
  },
  {
    Name: "Data card",
    image: "./scripts/Products/Data cards.jpeg",
    range: "₹100-400",
    type: "gadget",
    rating: 4.6,
    price: "200",
    id: 11,
    quantity: 1,
  },
  {
    Name: "Football",
    image: "./scripts/Products/Footballs.jpeg",
    range: "₹500-700",
    type: "Sports",
    rating: 4.8,
    price: "500",
    id: 12,
    quantity: 1,
  },
  {
    Name: "Shoes",
    image: "./scripts/Products/suits.jpg",
    range: "₹1500-1700",
    type: "shoes",
    rating: 2.3,
    price: "200",
    id: 13,
    quantity: 1,
  },
  {
    Name: "Hand Blender",
    image: "./scripts/Products/Hand blendera.jpeg",
    range: "₹500-700",
    type: "Kitchen accessories",
    rating: 2.9,
    price: "1200",
    id: 14,
    quantity: 1,
  },
  {
    Name: "Heels",
    image: "./scripts/Products/Heels.jpg",
    range: "₹5000-7000",
    type: "shoes",
    rating: 2.6,
    price: "12000",
    id: 15,
    quantity: 1,
  },
  {
    Name: "Jeans",
    image: "./scripts/Products/Jeans.jpg",
    range: "₹1500-1700",
    type: "cloth",
    rating: 4.5,
    price: "1200",
    id: 16,
    quantity: 1,
  },
  {
    Name: "Jeans",
    image: "./scripts/Products/Cargos.jpg",
    range: "₹400-1700",
    type: "cloth",
    rating: 1.9,
    price: "1200",
    id: 17,
    quantity: 1,
  },
  {
    Name: "Kids Clothes",
    image: "./scripts/Products/Kids Clothes.jpg",
    range: "₹1500-1700",
    type: "cloth",
    rating: 2.9,
    price: "1200",
    id: 18,
    quantity: 1,
  },
  {
    Name: "Hand Bangs",
    image: "./scripts/Products/Leather Bag.jpg",
    range: "₹500-700",
    type: "Bags",
    rating: 4.5,
    price: "600",
    id: 19,
    quantity: 1,
  },
  {
    Name: "Led tv",
    image: "./scripts/Products/LED Tv.jpeg",
    range: "₹15000-17000",
    type: "Furniture",
    rating: 3.9,
    price: "12000",
    id: 20,
    quantity: 1,
  },
  {
    Name: "Mouse",
    image: "./scripts/Products/Mouse.jpeg",
    range: "₹500-700",
    type: "Computer accessories",
    rating: 2.6,
    price: "500",
    id: 21,
    quantity: 1,
  },
  {
    Name: "Pants",
    image: "./scripts/Products/Pants.jpeg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.8,
    price: "600",
    id: 22,
    quantity: 1,
  },
  {
    Name: "Camera",
    image: "./scripts/Products/Premium Cameras.webp",
    range: "₹50000-70000",
    type: "gadgets",
    rating: 4.6,
    price: "60000",
    id: 23,
    quantity: 1,
  },
  {
    Name: "Shirt",
    image: "./scripts/Products/Premium shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.6,
    price: "550",
    id: 24,
    quantity: 1,
  },
  {
    Name: "Speakers",
    image: "./scripts/Products/S[eakers.jpeg",
    range: "₹500-700",
    type: "Gadgets",
    rating: 5,
    price: "800",
    id: 25,
    quantity: 1,
  },
  {
    Name: "Sarees",
    image: "./scripts/Products/Saares.jpg",
    range: "₹5000-7000",
    type: "cloth",
    rating: 2.9,
    price: "6000",
    id: 26,
    quantity: 1,
  },
  {
    Name: "Salwar",
    image: "./scripts/Products/Salwar.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 1.6,
    price: "800",
    id: 27,
    quantity: 1,
  },
  {
    Name: "Salwar",
    image: "./scripts/Products/Salwars.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.9,
    price: "600",
    id: 28,
    quantity: 1,
  },
  {
    Name: "Shirt",
    image: "./scripts/Products/Shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 3.1,
    price: "700",
    id: 29,
    quantity: 1,
  },
  {
    Name: "Shoes",
    image: "./scripts/Products/Shoes.jpg",
    range: "₹500-700",
    type: "shoes",
    rating: 3.5,
    price: "600",
    id: 30,
    quantity: 1,
  },
  {
    Name: "Shirts",
    image: "./scripts/Products/Street fashion shirts.jpeg",
    range: "₹500-700",
    type: "cloth",
    rating: 3.9,
    price: "500",
    id: 31,
    quantity: 1,
  },
  {
    Name: "Suits",
    image: "./scripts/Products/Suits.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 3.8,
    price: "600",
    id: 32,
    quantity: 1,
  },
  {
    Name: "Furniture",
    image: "./scripts/Products/swing.jpeg",
    range: "₹500-700",
    type: "Furniture",
    rating: 4.5,
    price: "700",
    id: 33,
    quantity: 1,
  },
  {
    Name: "T-shirt",
    image: "./scripts/Products/T-shirt.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.6,
    price: "600",
    id: 34,
    quantity: 1,
  },
  {
    Name: "Tables",
    image: "./scripts/Products/Tables.jpeg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.5,
    price: "600",
    id: 35,
    quantity: 1,
  },
  {
    Name: "Top",
    image: "./scripts/Products/Top.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.5,
    price: "500",
    id: 36,
    quantity: 1,
  },
  {
    Name: "Travel bags",
    image: "./scripts/Products/Travel Bags.jpg",
    range: "₹500-700",
    type: "bags",
    rating: 2.6,
    price: "600",
    id: 37,
    quantity: 1,
  },
  {
    Name: "Trousers",
    image: "./scripts/Products/Trousers.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.6,
    price: "550",
    id: 38,
    quantity: 1,
  },
  {
    Name: "T-shirts",
    image: "./scripts/Products/Urban t-shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 5,
    price: "600",
    id: 39,
    quantity: 1,
  },
  {
    Name: "Cargo",
    image: "./scripts/Products/Cargos.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.5,
    price: "650",
    id: 40,
    quantity: 1,
  },
];

let z = ProductData;
let mainpage_search_input =
  JSON.parse(localStorage.getItem("search_input")) || "";
// ELEMENT CATCHING AS LOCALSTORAGE SETTING
console.log(mainpage_search_input);
let search_button = document.querySelector(".btn>button:nth-child(1)");
let search_input = document.querySelector(".mid>input");
let body = document.getElementById("product-container");

// PRICE FILTER
let min_price_val = document.getElementById("min-price");
let max_price_val = document.getElementById("max-price");
let price_button = document.querySelector(
  "#price-filter>div:nth-child(3)>button"
);
price_button.addEventListener("click",()=>{

let filtered_by_price=ProductData.filter((el)=>{
return (Number(min_price_val.value)<= Number(el.price)&&Number(max_price_val.value)>=Number(el.price))
//  console.log( Number(el.price)>=Number(min_price_val.value&&Number(el.price)<= Number(max_price_val.value)));
})
if(filtered_by_price.length==0){
    alert("NO DATA")
}else{

    display(filtered_by_price)
}
    console.log('lol');
})







search_button.addEventListener("click", (e) => {
  e.preventDefault();
  mainpage_search_input = search_input.value;
  localStorage.setItem("search_input", JSON.stringify(search_input.value));
  console.log(mainpage_search_input);
  console.log(search_input.value);
  search(mainpage_search_input);
});
//(RATING FILTER)
let sort_value = document.getElementById("sort");
let rating_button = document.querySelector(
  "#rating-filter>div:nth-child(3)>button"
);
let rating_value = document.getElementById("rating-value");

rating_button.addEventListener("click", () => {
  if (rating_value.value <= 1) {
    let x = ProductData.filter((element) => {
      if (element.rating <= 1) {
        return true;
      }
    });
    if(x.length==0){
        alert("NO DATA")
    }else{

        display(x);
    }
  }
  if (rating_value.value <= 2 && rating_value.value > 1) {
    let x = ProductData.filter((element) => {
      if (element.rating <= 2 && element.rating > 1) {
        return true;
      }
    });
     if(x.length==0){
        alert("NO DATA")
    }else{

        display(x);
    }
  }
  if (rating_value.value <= 3 && rating_value.value > 2) {
    let x = ProductData.filter((element) => {
      if (element.rating <= 3 && element.rating > 2) {
        return true;
      }
    });
      if(x.length==0){
        alert("NO DATA")
    }else{

        display(x);
    }
  }
  if (rating_value.value <= 4 && rating_value.value > 3) {
    let x = ProductData.filter((element) => {
      if (element.rating <= 4 && element.rating > 3) {
        return true;
      }
    });
      if(x.length==0){
        alert("NO DATA")
    }else{

        display(x);
    }
  }
  if (rating_value.value <= 5 && rating_value.value >4) {
    let x = ProductData.filter((element) => {
      if (element.rating <= 5 && element.rating >4) {
        return true;
      }
    });
      if(x.length==0){
        alert("NO DATA")
    }else{

        display(x);
    }
  }
});

//SORT FITER
sort_value.addEventListener("change", (e) => {
  let sort_type = e.target.value;

  if (sort_type === "") {
    let sorted_data = ProductData.sort(() => {});
    console.log(sorted_data);
    display(sorted_data);
  }
  if (sort_type === "ascending") {
    let sorted_data = ProductData.sort(function (a, b) {
      return a.Name < b.Name ? -1 : 1;
    });
    display(sorted_data);
  }
  if (sort_type === "descending") {
    let sorted_data = ProductData.sort(function (a, b) {
      return a.Name > b.Name ? -1 : 1;
    });
    display(sorted_data);
  }
});
//SEARCH FILTER
search = (mainpage_search_input) => {
  let search_data = ProductData.filter((element) => {
    if (
      element.Name.toUpperCase().includes(mainpage_search_input.toUpperCase())
    ) {

      return element;
    } else {
      return false;
    }
   
  });
  display(search_data);
};


//DISPLAY FUNCTION AND APPEND
display = (data) => {
  body.innerHTML = "";
  data.forEach((element) => {
    let div = document.createElement("div");
    let anchor=document.createElement("a")
    div.style.border="red solid 1px"
    
      div.addEventListener("click", () => {
        anchor.href = "./product.html";
        anchor.target = "new";
        productLsdata = element;
        localStorage.setItem("product", JSON.stringify(productLsdata));
      });

    let image = document.createElement("img");
    image.src = element.image;

    let div1 = document.createElement("div");
    div1.setAttribute("class", "product-image");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "product-details");
    let div3 = document.createElement("div");
    div3.setAttribute("class", "product-price");

    let h3 = document.createElement("h3");
    h3.innerText = element.Name;
    let button = document.createElement("button");
    button.innerText = element.rating;
    let unordered_list = document.createElement("ul");
    let list_item1 = document.createElement("li");
    list_item1.innerText = `32 MB RAM | 32 MB ROM | Expandable Upto 32 GB`;
    let list_item2 = document.createElement("li");
    list_item2.innerText = `4.57 cm (1.8 inch) Display`;
    let list_item3 = document.createElement("li");
    list_item3.innerText = `0.8MP Rear Camera`;
    let list_item4 = document.createElement("li");
    list_item4.innerText = `2750 mAh Battery`;
    let h2 = document.createElement("h2");
    h2.innerText = `₹ ${element.price}`;
    let div4 = document.createElement("div");

    let logo_image = document.createElement("img");
    // logo_image.src = "./fa_62673a.png";

    unordered_list.append(list_item1, list_item2, list_item3, list_item4);
anchor.append(image)
    div3.append(h2, div4);
    div2.append(h3, button, unordered_list);
    div1.append(anchor);
    div.append(div1, div2, div3);
    body.append(div);
  });
};



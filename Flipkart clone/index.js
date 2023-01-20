let userLSData = [];
let productLsdata;
ProductData = [
  {
    Name: "Tops",
    image: "./scripts/Products/Ankle Tops.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.5,
    price:"₹1600"
  },
  {
    Name: "Heels",
    image: "./scripts/Products/Heels.jpg",
    range: "₹500-1000",
    type: "Accessories",
    rating: 3.2,
    price:"₹16000"
  },
  {
    Name: "Bycycles",
    image: "./scripts/Products/Bycycle.webp",
    range: "₹500-700",
    type: "vehicles",
    rating: 4.6,
    price:"₹17000"
  },
  {
    Name: "Cabinet",
    image: "./scripts/Products/Cabinets.jpeg",
    range: "₹500-700",
    type: "furniture",
    rating: 4.4,
    price:"₹4500"
  },
  {
    Name: "Camera",
    image: "./scripts/Products/camera.webp",
    range: "₹500-700",
    type: "gadgets",
    rating: 2.5,
    price:"₹1300"
  },
  {
    Name: "Cargo",
    image: "./scripts/Products/Cargos.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.6,
    price:"₹1500"
  },
  {
    Name: "Tops",
    image: "./scripts/Products/Caseroles.webp",
    range: "₹500-700",
    type: "Kitchen accessories",
    rating: 2.9,
    price:"₹16000"
  },
  {
    Name: "Shirt",
    image: "./scripts/Products/Check shirts (2).jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 5,
    price:"₹13000"
  },
  {
    Name: "shirt",
    image: "./scripts/Products/Check shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.9,
    price:"₹500"
  },
  {
    Name: "Cooling Pad",
    image: "./scripts/Products/Cooling Pads.jpeg",
    range: "₹500-700",
    type: "Gadgets",
    rating: 2.8,
    price:"₹1200"
  },
  {
    Name: "Data card",
    image: "./scripts/Products/Data cards.jpeg",
    range: "₹100-400",
    type: "gadget",
    rating: 4.6,
    price:"₹200"
    
    

  },
  {
    Name: "Football",
    image: "./scripts/Products/Footballs.jpeg",
    range: "₹500-700",
    type: "Sports",
    rating: 4.8,
    price:"₹500"
  },
  {
    Name: "Shoes",
    image: "./scripts/Products/suits.jpg",
    range: "₹1500-1700",
    type: "shoes",
    rating: 2.3,
    price:"₹200"
  },
  {
    Name: "Hand Blender",
    image: "./scripts/Products/Hand blendera.jpeg",
    range: "₹500-700",
    type: "Kitchen accessories",
    rating: 2.9,
    price:"₹1200"
  },
  {
    Name: "Heels",
    image: "./scripts/Products/Heels.jpg",
    range: "₹5000-7000",
    type: "shoes",
    rating: 2.6,
    price:"₹12000"
  },
  {
    Name: "Jeans",
    image: "./scripts/Products/Jeans.jpg",
    range: "₹1500-1700",
    type: "cloth",
    rating: 4.5,
    price:"₹1200"
  },
  {
    Name: "Jeans",
    image: "./scripts/Products/Cargos.jpg",
    range: "₹400-1700",
    type: "cloth",
    rating: 1.9,
    price:"₹1200"
  },
  {
    Name: "Kids Clothes",
    image: "./scripts/Products/Kids Clothes.jpg",
    range: "₹1500-1700",
    type: "cloth",
    rating: 2.9,
    price:"₹1200"
  },
  {
    Name: "Hand Bangs",
    image: "./scripts/Products/Leather Bag.jpg",
    range: "₹500-700",
    type: "Bags",
    rating: 4.5,
    price:"₹600"
  },
  {
    Name: "Led tv",
    image: "./scripts/Products/LED Tv.jpeg",
    range: "₹15000-17000",
    type: "Furniture",
    rating: 3.9,
    price:"₹12000"
  },
  {
    Name: "Mouse",
    image: "./scripts/Products/Mouse.jpeg",
    range: "₹500-700",
    type: "Computer accessories",
    rating: 2.6,
    price:"₹500"
  },
  {
    Name: "Pants",
    image: "./scripts/Products/Pants.jpeg",
    range: "₹500-700",
    type: "cloth",
    rating: 4.8,
    price:"₹600"
  },
  {
    Name: "Camera",
    image: "./scripts/Products/Premium Cameras.webp",
    range: "₹50000-70000",
    type: "gadgets",
    rating: 4.6,
    price:"₹60000"
  },
  {
    Name: "Shirt",
    image: "./scripts/Products/Premium shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.6,
    price:"₹550"
  },
  {
    Name: "Speakers",
    image: "./scripts/Products/S[eakers.jpeg",
    range: "₹500-700",
    type: "Gadgets",
    rating: 5,
    price:"₹800"
  },
  {
    Name: "Sarees",
    image: "./scripts/Products/Saares.jpg",
    range: "₹5000-7000",
    type: "cloth",
    rating: 2.9,
    price:"₹6000"
  },
  {
    Name: "Salwar",
    image: "./scripts/Products/Salwar.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 1.6,
    price:"₹800"
  },
  {
    Name: "Salwar",
    image: "./scripts/Products/Salwars.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.9,
    price:"₹600"
  },
  {
    Name: "Shirt",
    image: "./scripts/Products/Shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 3.1,
    price:"₹700"
  },
  {
    Name: "Shoes",
    image: "./scripts/Products/Shoes.jpg",
    range: "₹500-700",
    type: "shoes",
    rating: 3.5,
    price:"₹600"
  },
  {
    Name: "Shirts",
    image: "./scripts/Products/Street fashion shirts.jpeg",
    range: "₹500-700",
    type: "cloth",
    rating: 3.9,
    price:"₹500"
  },
  {
    Name: "Suits",
    image: "./scripts/Products/Suits.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 3.8,
    price:"₹600"
  },
  {
    Name: "Furniture",
    image: "./scripts/Products/swing.jpeg",
    range: "₹500-700",
    type: "Furniture",
    rating: 4.5,
    price:"₹700"
  },
  {
    Name: "T-shirt",
    image: "./scripts/Products/T-shirt.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.6,
    price:"₹600"
  },
  {
    Name: "Tables",
    image: "./scripts/Products/Tables.jpeg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.5,
    price:"₹600"
  },
  {
    Name: "Top",
    image: "./scripts/Products/Top.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.5,
    price:"₹500"
  },
  {
    Name: "Travel bags",
    image: "./scripts/Products/Travel Bags.jpg",
    range: "₹500-700",
    type: "bags",
    rating: 2.6,
    price:"₹600"
  },
  {
    Name: "Trousers",
    image: "./scripts/Products/Trousers.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.6,
    price:"₹550"
  },
  {
    Name: "T-shirts",
    image: "./scripts/Products/Urban t-shirts.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 5,
    price:"₹600"
  },
  {
    Name: "Cargo",
    image: "./scripts/Products/Cargos.jpg",
    range: "₹500-700",
    type: "cloth",
    rating: 2.5,
    price:"₹650"
  },
];

let body = document.querySelector(".body");
let removebutton = document.querySelector(".button-cross");
let loginpage = document.querySelector(".loginpage");

// hide login button
removebutton.addEventListener("click", (e) => {
  e.preventDefault();
  loginpage.style.visibility = "hidden";
});

// remove loginpage
let navloginbutton = document.querySelector(".btn");
navloginbutton.addEventListener("click", (e) => {
  loginpage.style.visibility = "visible";
});

// lsdata Storage
let pageLogin = document.querySelector(".form>button:nth-child(7)");
let userMail = document.getElementById("gmail");
let userPassword = document.getElementById("pass");

pageLogin.addEventListener("click", () => {
  let userObj = {
    email: userMail.value,
    password: userPassword.value,
  };
  userLSData.push(userObj);
  localStorage.setItem("user-data", JSON.stringify(userLSData));
});

// sorters and filters




// product display
let product_banner1 = document.querySelector(".products-slide1");
let product_banner2 = document.querySelector(".products-slide2");
let product_banner3 = document.querySelector(".products-slide3");
let product_banner4 = document.querySelector(".products-slide4");
let product_banner5 = document.querySelector(".products-slide5");
let product_banner6 = document.querySelector(".products-slide6");
display_function = () => {
  ProductData.forEach((element, index) => {
    


    if (index < 5) {
      let anchor=document.createElement("a");
      let div = document.createElement("div");


      let img = document.createElement("img");
      let name = document.createElement("h5");
      let price = document.createElement("p");
      let type = document.createElement("p");
      
      div.addEventListener("click",()=>{
      anchor.href="./product.html"
     anchor.target="new"
     productLsdata=element
     localStorage.setItem("product",JSON.stringify(productLsdata))
     

      })
      

      img.src = element.image;
      name.textContent=element.Name;
      price.textContent=element.range
      price.style.color="#388e3c";
      type.textContent=element.type;
      btn.innerText="VIEW ALL"


    
      anchor.append(img,name,price,type)
      div.append(anchor);
      product_banner1.append(div);
    }
    if (index >= 5&&index<10) {
      let div = document.createElement("div");
      
      let img = document.createElement("img");
      let name = document.createElement("h5");
      let price = document.createElement("p");
      let type = document.createElement("p");
      
      
      img.src = element.image;
      name.textContent=element.Name;
      price.textContent=element.range
      price.style.color="#388e3c";
      type.textContent=element.type;
      btn.innerText="VIEW ALL"

      div.append(img,name,price,type);
      product_banner2.append(div);
    }
     if (index >= 10&&index<15) {
      let div = document.createElement("div");

      let img = document.createElement("img");
      let name = document.createElement("h5");
      let price = document.createElement("p");
      let type = document.createElement("p");
      

      img.src = element.image;
      name.textContent=element.Name;
      price.textContent=element.range
      price.style.color="#388e3c";
      type.textContent=element.type;
      btn.innerText="VIEW ALL"

      div.append(img,name,price,type);
      product_banner3.append(div);
    }
     if (index >= 15&&index<19) {
      let div = document.createElement("div");

      let img = document.createElement("img");
      let name = document.createElement("h5");
      let price = document.createElement("p");
      let type = document.createElement("p");
      

      img.src = element.image;
      name.textContent=element.Name;
      price.textContent=element.range
      price.style.color="#388e3c";
      type.textContent=element.type;
      btn.innerText="VIEW ALL"

      div.append(img,name,price,type);
      product_banner4.append(div);
    }
     if (index >= 20&&index<25) {
      let div = document.createElement("div");

      let img = document.createElement("img");
      let name = document.createElement("h5");
      let price = document.createElement("p");
      let type = document.createElement("p");
      

      img.src = element.image;
      name.textContent=element.Name;
      price.textContent=element.range
      price.style.color="#388e3c";
      type.textContent=element.type;
      btn.innerText="VIEW ALL"

      div.append(img,name,price,type);
      product_banner5.append(div);
    }
     if (index >= 25&&index<30) {
      let div = document.createElement("div");

      let img = document.createElement("img");
      let name = document.createElement("h5");
      let price = document.createElement("p");
      let type = document.createElement("p");
      

      img.src = element.image;
      name.textContent=element.Name;
      price.textContent=element.range
      price.style.color="#388e3c";
      type.textContent=element.type;
      btn.innerText="VIEW ALL"

      div.append(img,name,price,type);
      product_banner6.append(div);
    }


  });
};
display_function();

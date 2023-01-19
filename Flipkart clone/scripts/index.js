let userData = [];

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
  userData.push(userObj);
  localStorage.setItem("user-data", JSON.stringify(userData));
});

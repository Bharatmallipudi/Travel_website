const humberger = document.querySelector(".humberger");
const sidebar = document.querySelector(".side-bar");
const sideclose = document.querySelector(".side-close");
const button = document.querySelector("#button");
const login = document.querySelector(".login");
const btn = document.querySelector("#s");
const signpage = document.querySelector(".sign-up");
const close = document.querySelector(".sign-close");
const loginclose = document.querySelector(".login-close");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const signbtn = document.querySelector(".sign-btn");
const successimg = document.querySelector(".success-img");
const see = document.querySelector("#see");
const display = document.querySelector(".tour-display");
const grab = document.querySelector(".grab");
const grabimg = document.querySelector(".grab-img img");
const link = document.querySelector("#a");
const mobilelogin = document.querySelector("#mobile_login");

humberger.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
  // humberger.innerHTML = 'X'
});

sideclose.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100%)";
});

button.addEventListener("click", () => {
  login.style.display = "flex";
  successimg.style.display = "none";
});

mobilelogin.addEventListener("click", () => {
  login.style.display = "flex";
  successimg.style.display = "none";
  sidebar.style.transform = "translateX(-250px)";
});

btn.addEventListener("click", () => {
  signpage.style.display = "flex";
});

close.addEventListener("click", () => {
  signpage.style.display = "none";
});

loginclose.addEventListener("click", () => {
  login.style.display = "none";
});

signbtn.addEventListener("click", () => {
  let input1value = input1?.value || "";
  let input2value = input2?.value || "";
  let input3value = input3?.value || "";

  if (input1value && input2value && input3value) {
    let user = {
      email: input1value,
      phNo: input2value,
      pass: input3value,
    };
    const r1 = document.querySelector("#r1");
    const r2 = document.querySelector("#r2");
    r1.textContent = input1value;
    r2.textContent = input2value;

    if (successimg) {
      successimg.style.display = "flex";
    }

    signpage.style.display = "none";

    const mainlogin = document.querySelector(".login");
    let logininput1 = document.querySelector(".login-input1");
    let logininput2 = document.querySelector(".login-input2");
    const loginbtn = document.querySelector(".login-btn");
    const loginmsg = document.querySelector(".login-msg");

    loginbtn.addEventListener("click", () => {
      let readvalue1 = logininput1?.value || "";
      let readvalue2 = logininput2?.value || "";
      if (readvalue1 == user.email && readvalue2 == user.pass) {
        link.href = "./index1.html";
        link.click();
        // loginmsg.style.display="flex"
        // login.style.display="none"
      } else {
        alert("Please provide the valid credentials");
      }
    });

    // Optionally, log the user object or send it to a server
    console.log(user);
  } else {
    alert("Please fill in all the fields.");
  }
});

// see/////////////////////////////

let isDisplayed = false; // Keep track of the display state

see.addEventListener("click", () => {
  if (!isDisplayed) {
    display.style.display = "block";
    see.innerHTML = "<h1>X</h1>";
    isDisplayed = true;
  } else {
    display.style.display = "none";
    see.innerHTML = "<h3>See all</h3>"; // Assuming you want to toggle back to a different text
    isDisplayed = false;
  }
});

grabimg.addEventListener("click", () => {
  grabimg.classList.add("grab2-img");
});

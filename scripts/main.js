

// alert("hello!");


// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }
  


//   document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
  
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });
  

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OIP.jpeg") {
    myImage.setAttribute("src", "images/hi.jpeg");
  } else {
    myImage.setAttribute("src", "images/OIP.jpeg");
  }
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  
  myButton.addEventListener("click", () => {
    setUserName();
  });

  
  
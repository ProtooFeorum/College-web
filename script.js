window.addEventListener("scroll", function(){
    let scrollPos = this.window.scrollY;
    if(scrollPos > 199){
   header.classList.add('red');
 } else{
   header.classList.remove('red');  
 }

  console.log(scrollPos);
});






















































// let userName = "Fiodor";
// let age = 15.5;
// let boo = true;

// const header = document.querySelector("#header");
// const navLinks = document.querySelectorAll(".navLink")

// console.log(navLinks);

// function sayHello() {
//     let massage = "Hello " + userName;
//     console.log(massage);
// }

// sayHello();

// function simpleMath(a, b) {
//     let result = a+b;
//     return result;
// }

// let sum = simpleMath(10, 23);
// console.log(sum);

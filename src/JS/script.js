const hamburger = document.querySelector(".hamburger");
const hamBar = document.querySelector(".hamBar");
const cross = document.querySelector(".cross");

hamburger.addEventListener("click",()=>{
    hamBar.classList.toggle("letShow");
})


const humberger = document.querySelector(".humberger")
const sidebar  = document.querySelector(".side-bar")
const sideclose = document.querySelector(".side-close")


humberger.addEventListener('click',()=>{
  sidebar.style.transform = 'translateX(0)'
})

sideclose.addEventListener('click',()=>{
     sidebar.style.transform = 'translateX(-250px)'
})
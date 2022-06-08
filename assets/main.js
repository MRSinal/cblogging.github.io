 const primaryNav = document.querySelector(".nav-items");
 const navToggle = document.querySelector(".mobile-nav-toggle");
 const buttons = document.querySelector("btn");
 navToggle.addEventListener("click", () => {
     const visibility = primaryNav.getAttribute("data-visible");
     
     if(visibility === "false"){
         primaryNav.setAttribute("data-visible", true);
         navToggle.setAttribute("aria-expanded", true);
     } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded" , false);
     }
 });
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

buttons.forEach(btnm => {
  btnm.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove()
    },1000);
  })


  
});
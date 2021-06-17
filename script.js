const mobileMenuBars = document.querySelector(".menu-bars");
const mobileMenu = document.getElementById("mobile-buttons");
mobileMenuBars.addEventListener("click", () => {
     //  console.log("clicked");
     mobileMenu.classList.toggle("show");
     mobileMenu.classList.toggle("hide");
     // console.log(mobileMenu)
});

window.addEventListener("resize", () => {
     // console.log(window.innerWidth)
     if (window.innerWidth > 580) {
          mobileMenu.className = "nav-menu-bars-click hide";
     }
});

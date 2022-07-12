const burgerButton =document.querySelector('#burger-button')
const navbarLinks = document.querySelector('#navbar-links')

burgerButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("is-active")
})
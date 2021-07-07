const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
const menuLinks = document.querySelectorAll('.navigation__link');

navBtn.addEventListener("click", function (evt) {
    evt.preventDefault()
    navBtn.classList.toggle("navigation__button--closed");
    navList.classList.toggle("navigation__list--active")
})

menuLinks.forEach(function (link) {
    link.addEventListener('click', function() {
        navList.classList.remove("navigation__list--active")
        navBtn.classList.add("navigation__button--closed");
    })
})
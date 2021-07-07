const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__wrapper");
const menuLinks = document.querySelectorAll('.navigation__link');

navBtn.addEventListener("click", function (evt) {
    evt.preventDefault()
    navBtn.classList.toggle("navigation__button--closed");
    navList.classList.toggle("navigation__wrapper--active");
})

menuLinks.forEach(function (link) {
    link.addEventListener('click', function() {
        navList.classList.remove("navigation__wrapper--active")
        navBtn.classList.add("navigation__button--closed");
    })
})
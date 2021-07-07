new Swiper('.service__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.service__pagination',
        clickable: true,
    },

    breakpoints: {
        610: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },

        1100: {
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },

        1400: {
            slidesPerView: 4,
        },
    },


});
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".certificates__swiper", {
        loop: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 50,
        speed: 800,
        breakpoints: {
            800: {
                spaceBetween: 106
            }
        }
    });
});

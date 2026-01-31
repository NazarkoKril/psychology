document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".feedback__swiper", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 60,
        speed: 800,
    });
});

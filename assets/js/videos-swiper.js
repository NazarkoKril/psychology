document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".videos__swiper", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 40,
        speed: 800,
    });
});

const sliderHero = document.querySelector(".heroSwiper");

if (sliderHero) {
  new Swiper(".heroSwiper", {
    cssMode: true,

    loop: true, // 👈 инфинити

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    mousewheel: true,
    keyboard: true,
  });
}

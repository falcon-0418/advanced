javascript:
  document.addEventListener("DOMContentLoaded", function() {
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        spaceBetween: 30,
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 2.5,
      spaceBetween: 0,
      delay: 0,
      speed: 10000,
    })
  });
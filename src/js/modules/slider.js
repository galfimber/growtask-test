const slider = () => {
  new Swiper(".slider__carousel", {
    navigation: {
      nextEl: ".nextEl",
      prevEl: ".prevEl",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.19,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

    loop: true,
  });
};

export default slider;

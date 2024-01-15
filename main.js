let swiper = new Swiper(".portfolio__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakPoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });
  
  let swiper1 = new Swiper(".testimonial__container", {
    loop: true,
    grabCusrsor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });
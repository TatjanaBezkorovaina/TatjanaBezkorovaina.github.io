const swiper = new Swiper(".swiper", {
  // стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // навигация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // динамика
    // dynamicBullets: true,

    type: "fraction",
    // type: "progressbar",
  },
  // скролл
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  grabCursor: true,

  // навигация по хешу
  hashNavigation: {
    watchState: true,
  },

  // управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  //управление колесом мыши
  mousewheel: {
    sensitivity: 1,
  },

  // бесконечность
  // loop: true,

  // кол-во слайдов для показа
  // slidesPerView: 3,
  speed: 800,
  spaceBetween: 30,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },
  // effect: "coverflow",

  // автопрокрутка
  // autoplay: {
  //   delay: 2000,
  // },
});

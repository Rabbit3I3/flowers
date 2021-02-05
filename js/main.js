$(document).ready(function(){
const flowersSlider = new Swiper('.flowers-slider', {
      // пораметры слайдера
      loop: true,
      slidesPerView: 6,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Настройки адоптивной верстки
      breakpoints: {
        // если окно браузера 320
        320: {
          slidesPerView: 2,
        },
        // если окно браузера 480
        480: {
          slidesPerView: 3,
        },
        // если окно браузера 992
        992: {
          slidesPerView: 6,
        }
      }
    });
    const reviewsSlider = new Swiper('.reviews-slider', {
      // пораметры слайдера
      loop: true,
      slidesPerView: 1,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
    });
    $("#review-1").on('click', function () {

      $.fancybox.open([
        {
          src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
          opts: {
            caption: 'First caption',
            thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
          }
        },
        {
          src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts: {
            caption: 'Second caption',
            thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
          }
        }
      ], {
        loop: true,
        thumbs: {
          autoStart: true
        }
      });

    });
});
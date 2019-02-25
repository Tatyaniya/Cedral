$(function () {
    $(document).ready(function () {
        //initialize swiper when document ready
        var mySwiper = new Swiper ('.swiper-container', {
          // Optional parameters
            loop: true,
            slidesPerView: 2.9,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-prev',
              prevEl: '.swiper-next',
            },
        })
      });
});
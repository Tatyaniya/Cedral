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
      });

    // выбор типа доски и передача в скрытый инпут
    var radio1 = document.getElementsByName('radio1');
    var radio2 = document.getElementsByName('radio2');

    for (var i=0; i<radio1.length; i++) {
      radio1[i].onchange = testRadio1;
    }

    function testRadio1(e){
      $('#radio1').val(this.value);
    }

    for (var j=0; j<radio2.length; j++) {
      radio2[j].onchange = testRadio2;
    }

    function testRadio2(e){
      $('#radio2').val(this.value);
    }
    });


    // табы
    $('.tabs a').click(function(){
        switch_tabs($(this));
    });
    
    function switch_tabs(obj) {
      var none = document.querySelectorAll('.tab-content');
      
      for (var i=0; i<none.length; i++) {
        none[i].classList.add("d-none");
      }

      var id = obj.attr("rel");
      $('#'+id).removeClass("d-none");

      var color = obj.attr("data-color");
      $('#boardType').val(color);
    }

  });

});


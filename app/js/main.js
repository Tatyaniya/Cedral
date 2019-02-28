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
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
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
    $('.color__link').click(function(){
        switch_tabs($(this));
        console.log(this);
    });
    
    function switch_tabs(obj) {
      var none = document.querySelectorAll('.tabs__item');
      
      for (var i=0; i<none.length; i++) {
        none[i].classList.add("d-none");
      }

      var id = obj.attr("rel");
      $('#'+id).removeClass("d-none");

      var color = obj.attr("data-color");
      $('#boardType').val(color);
    }

    //Валидация и отправка формы
    $('[data-submit]').on('click', function(e) {
      e.preventDefault();
      $(this).parent('form').submit();
    });
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
      "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {

      el.validate({
        rules: {
          tel: {
              required: true,
              regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name: {
              required: true
          },
          email: {
              required: true,
              email: true
          }
      },
      messages: {
          tel: {
              required: 'Поле обязательно для заполнения',
              regex: 'Телефон может содержать символы + - ()'
          },
          name: {
              required: 'Поле обязательно для заполнения',
          },
          email: {
              required: 'Поле обязательно для заполнения',
              email: 'Неверный формат E-mail'
          }
      },

        // Начинаем проверку id="" формы
        submitHandler: function(form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
                // Если у формы id="goToNewPage" - делаем:
                case 'goToNewPage':
                    $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                        .always(function(response) {
                            //ссылка на страницу "спасибо" - редирект
                            location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                            //отправка целей в Я.Метрику и Google Analytics
                            ga('send', 'event', 'masterklass7', 'register');
                            yaCounter27714603.reachGoal('lm17lead');
                        });
                    break;
                // Если у формы id="popupResult" - делаем:
                case 'popupResult':
                    $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                        .always(function(response) {
                            setTimeout(function() {
                                $('#loader').fadeOut();
                            }, 800);
                            setTimeout(function() {
                                $('#overlay').fadeIn();
                                $form.trigger('reset');
                                //строки для остлеживания целей в Я.Метрике и Google Analytics
                            }, 1100);
                            $('#overlay').on('click', function(e) {
                                $(this).fadeOut();
                            });

                        });
                    break;
                }
            return false;
        }
      });
    }

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
      valEl($(this));

  });


  //плавняа прокрутка
  $(".more").click( e => {
    e.preventDefault();
    elementClick = $(e.currentTarget).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });

  $(".create-facade").click( e => {
    e.preventDefault();
    elementClick = $(e.currentTarget).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });

});

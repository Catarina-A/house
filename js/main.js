$(function(){
  $('.intro__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    // autoplay: true,
    dots: true,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        console.log(slider);
        return (i + 1) + '/' + slider.slideCount;
    },
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          arrows: false
        }
      },
    ]
  })

  $('.menu__btn').on('click', function(){
    $('.menu-language').toggleClass('menu-language--active')
  });
});

$(".intro__btn").on("click","a", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();
  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),
  //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    
    let formData = new FormData(form);

    form.classList.add('_sending');
    let response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
      form.classList.remove('_sending');
    } else {
      alert("Ошибка");
      form.classList.remove('_sending');
    }
  }
});



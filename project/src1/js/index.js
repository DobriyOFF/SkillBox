window.addEventListener('DOMContentLoaded', function() {
  (function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
      new SelectFx(el);
    } );
  })();
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerColumn: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')
  
  swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    swiper.slideNext();
  })

  $('.project-gallery-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
  $(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
      $('#accordeon .acc-head').on('click', f_acc);
  });
   
  function f_acc(){
  //скрываем все кроме того, что должны открыть
    $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
  // открываем или скрываем блок под заголовком, по которому кликнули
      $(this).next().slideToggle(1000);
  }

  tippy('#tips_first', {
    content: "Пример современных тенденций - современная методология разработки",
    theme: 'tomato',
  });
  
  tippy('#tips_second', {
    content: "В стремлении повысить качество",
    theme: 'tomato',
  });
  tippy('#tips_third', {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    theme: 'tomato',
  });


  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [48.872309, 2.354323],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14
      });
      var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              coordinates: [] // координаты точки
          }
      });

      var myPlacemark = new ymaps.Placemark([48.872309, 2.354323], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/Subtract.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
      });
      
      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myGeoObject);
      myMap.geoObjects.add(myPlacemark);
  }

})
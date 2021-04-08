(function(){
  $('.js-open-filter').on('click', function () {
    alertify.panel({
      target: $('[data-modal="collection-filter"]').html(),
      position: 'left',
      onOpen: function (modal) {
        InSalesUI.Filter.create($(modal));
      }
    });
  });
}());

(function(){
  if (Site.template != 'collection') {
    return;
  }

  var _reviewsOption = {
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
      380: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  };

// Просмотренные товары рендер
  $(function(){

    localforage.getItem('view_array')
      .then(function(temp_array) {
        if ((temp_array == null) || (temp_array == 'undefined')) {
          return false;
        }

        Products.getList(temp_array)
          .done(function (products) {
            var _products = _.reduce(temp_array, function (result, id) {
                result.push(products[id]);

                return result;
              }, []);

            $('.js-view-products').html(Template.render(_products, 'view_products'));

            $('[data-slider="reviews-products"]').each(function () {
              new Swiper (this, _reviewsOption);
            });
        });
      });
  })
})();

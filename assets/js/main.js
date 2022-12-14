jQuery(function ($) {

    $(".galleryCar").owlCarousel({
        nav: true,
        loop: true,
        dots: true,
        center: true,
        items: 1,
        navText: ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'],
        margin: 10,
        stagePadding: 100,
        rtl: true,
        responsive: {
            0: {
                stagePadding: 0,
            },
            800: {
                stagePadding: 100,
            }
        }
    });
$(".ourClientCar").owlCarousel({
    nav: true,
    loop: false,
    items: 2,
    rtl: true,
    navText: ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'],
    margin: 130,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },

        700: {
            items: 2,
        }
    }

});
$(window).scroll(function () {
    scrollTop = $(window).scrollTop();
//add fix header when scroll down and remove when back up
    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');
    }

    else {
      $('header').removeClass('scrollNav');
    }
  });
  $(".close").click(function(){
    $(this).parent().removeClass("show")
  })

  $('.navbar-collapse ul li a').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
    return false;
});

});


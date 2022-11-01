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


});


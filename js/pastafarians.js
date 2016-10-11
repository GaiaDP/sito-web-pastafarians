(function($) {
    "use strict";

    // scrolling morbido
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Cambia colore nav scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });


    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); 

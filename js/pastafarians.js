(function($) {
    "use strict";

  

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

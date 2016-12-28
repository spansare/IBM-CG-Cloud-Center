$(document).ready(function () {
    "use strict";

    // BACKTOTOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#backtotop").addClass("active");
        } else {
            $("#backtotop").removeClass("active");
        }
    });

    $('#backtotop').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    
    $('#loginBtn').on("click", function () {
    	window.location.href='login.html';
    });
    
    $('#homeBtn').on("click", function () {
    	window.location.href='index.html';
    });
    
  //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
    
    
});

// FEATURED PRODUCTS
$(window).load(function () {
    "use strict";
//    $('.modal.fade.in #popup-product').royalSlider("updateSliderSize", true);
    /* Loading Script */
    $('#loader').fadeOut("slow");

});
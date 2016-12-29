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
    	window.location.href='login.jsp';
    });
    
    $('#homeBtn').on("click", function () {
    	window.location.href='index.html';
    });
	    
});

// FEATURED PRODUCTS
$(window).load(function () {
    "use strict";
//    $('.modal.fade.in #popup-product').royalSlider("updateSliderSize", true);
    /* Loading Script */
    $('#loader').fadeOut("slow");

});
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
        }, 1000);
        return false;
    });
    
	$('body').on('click', '#loginBtn', function () {
		 window.location.href='login.jsp';
	});
	$('body').on('click', '#homeBtn', function () {
		 window.location.href='index.html';
	});
	$('body').on('click', '#loginOutBtn', function () {
		 window.location.href='login.jsp';
	});
	$('body').on('click', '#adminHomeBtn', function () {
		 window.location.href='admin.jsp';
	});
	    
});

// FEATURED PRODUCTS
$(window).load(function () {
    "use strict";
//    $('.modal.fade.in #popup-product').royalSlider("updateSliderSize", true);
    /* Loading Script */
    $('#loader').fadeOut("slow");

});
;

(function($) {
    "use strict";

    $(document).ready(function() {

        // Active Menu

        $(window).ready(function(){
            $('#menu-nav li a').click(function () {
                $(this).parent().addClass('active').siblings().removeClass('active')
            });
            $('#menu-nav li a').filter(function () {
                return this.href == location.href
            }).parent().addClass('active').siblings().removeClass('active');
        });

        // Scroll

        $(".navbar-nav").on("click","a", function (event) {
            event.preventDefault();

            let id  = $(this).attr('href');
            let top = $(id).offset().top - 60;

            $('body,html').animate({scrollTop: top}, 1000);
        });

        // Slick Carousel

        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            draggable: true,
            autoplaySpeed: 2500,
            arrows: true
        });

    });

    // Modal-form

    $(document).ready(function() {
        $('.button-modal').click( function(event){
            event.preventDefault();
            $('#overlay').fadeIn(400,
                function(){
                    $('#modal_form')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                });
        });

        $('#modal_close, #overlay').click( function(){
            $('#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                );
        });
    });

    new WOW().init();

})(jQuery);



app.common = {
    mainInit: () => {
        let text = 'ES6 is working';

        $('html').click(function() {
            if ($('.topMenu').hasClass('opened')) {
                console.log("opened");
                // $('.topMenu').removeClass('opened');
            }
        });

        $('.nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.topMenu').toggleClass('opened');
            $('.desc-wrapper').toggleClass('hidden');
        });

        $('.nav-el').on('click', function(e) {
            $('.nav-el').removeClass('active');
            $(this).addClass('active');
        });

            $('.text-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }
}

function checkScroll() {
    if( $(window).scrollTop() > 20 ) { //abuse 0 == false :)
        if( !$('.topStripe').hasClass('scrolled') ) {
            $('.topStripe').addClass('scrolled');
        }
    } else {
        if( $('.topStripe').hasClass('scrolled') ) {
            $('.topStripe').removeClass('scrolled');
        }
    }
}

$(function () {
    $(document).ready(() => {
        app.common.mainInit();
    })
});

$(window).on('scroll', function() {
    checkScroll();

    // wWdth = $(window).width();
});

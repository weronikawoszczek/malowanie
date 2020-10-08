app.common = {
    mainInit: () => {
        let text = 'ES6 is working';

        $('.nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.topMenu').toggleClass('opened');
            $('.description').toggleClass('hidden');
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
            autoplaySpeed: 2000
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

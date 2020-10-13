app.common = {
    mainInit: () => {
        // let text = 'ES6 is working';

        $('.nav-icon1').click(function(e){

            e.preventDefault();
            e.stopPropagation();

            $(this).toggleClass('open');
            $('.topMenu').toggleClass('opened');
            $('.desc-wrapper').toggleClass('hidden');

            $(document).on('click', function closeMenu (e){
                if($('.topMenu').hasClass('opened')){
                    $('.topMenu').removeClass('opened');
                    $('.menuToggle').removeClass('open');
                    $('.desc-wrapper').removeClass('hidden');

                } else {
                    $(document).on('click', closeMenu);
                    // $('.nav-el').removeClass('active');
                }
            });
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
        if( !$('.header-scroll').hasClass('scrolled') ) {
            $('.header-scroll').addClass('scrolled');
        }
    } else {
        if( $('.header-scroll').hasClass('scrolled') ) {
            $('.header-scroll').removeClass('scrolled');
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

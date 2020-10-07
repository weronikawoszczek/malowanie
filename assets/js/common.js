app.common = {
    mainInit: () => {
        let text = 'ES6 is working';

        $('.nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.topMenu').toggleClass('opened');
            $('section').toggleClass('hide');
            // $('section').toggleClass('hide');
        });

        $('.nav-el').on('click', function(e) {
            $('.nav-el').removeClass('active');
            $(this).addClass('active');
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

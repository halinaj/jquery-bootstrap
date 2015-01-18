$(document).ready(function () {

    var isDesktop = Modernizr.mq('only all and (min-width: 1200px)');
    var btnJumpToTop = $('.btn-jump-to-top');
    var navbar = $('.navbar');
    var brand = $('.navbar-brand');
    var stickyShowPoint = 247;

    $('.nav > li').menuControl({
        content: $('.content'),
        startPage: '#home',
        animation: true
    });

    if (isDesktop) {
        $('.rotating-item').bgRotator({
            imgDisplayTime: 4000,
            imgPassTime: 2000
        });
    }

    btnJumpToTop.on('click', function () {
        TweenMax.to('body, html', .5, {scrollTop: 0});
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyShowPoint) {
            btnJumpToTop.removeClass('hidden');
            if (isDesktop) {
                navbar.addClass('sticky');
                brand.removeClass('visible-xs');
            }
        } else {
            btnJumpToTop.addClass('hidden');
            if (isDesktop) {
                navbar.removeClass('sticky');
                brand.addClass('visible-xs');
            }
        }
    });

    // bootstrap navbar hack
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $(".right-content").load("tpl/right.html");
})
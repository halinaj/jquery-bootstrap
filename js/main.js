$(document).ready(function () {

    var isDesktop = Modernizr.mq('only all and (min-width: 1200px)');
    console.log(isDesktop);
    var navbar = $('.navbar');
    var brand = $('.navbar-brand');


    var btnJumpToTop = $('.btn-jump-to-top');
    var stickyShowPoint = 247;


    $('.nav > li').menuControl({
        content: $('.content'),
        startPage: '#home',
        animation: true
    });




    btnJumpToTop.on('click', function () {
        TweenMax.to('body, html', .5, {scrollTop: 0});
    });


    $(window).scroll(function () {
        console.log('scrol', $(window).scrollTop());


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

if(isDesktop) {
    $('.rotating-item').bgRotator({
        imgDisplayTime: 4000,
        imgPassTime: 2000
    });
}
    $(".right-content").load("tpl/right.html");
})
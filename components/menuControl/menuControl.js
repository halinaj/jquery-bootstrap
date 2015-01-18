(function ($) {
    var methods = {
        getBrowserAdress: function () {
            var str = window.location.hash;
            return str.replace(/[#]/gi, "");
        },
        pageReload: function (options) {
            var link = methods.getBrowserAdress() || options.startPage.substr(1);
            var menuEl = $('a[href$= ' + link + ']');
            var title = menuEl.attr('title');
            // set active menu btn
            $('li.menu-active').removeClass('menu-active');
            if (menuEl.parent().parent().hasClass('dropdown-menu')) {
                menuEl.closest('li.dropdown').addClass('menu-active');
            } else {
                menuEl.parent().addClass('menu-active');
            }
            options.content.fadeOut('fast', function () {
                options.content.load(link + ".html", function () {
                    $(this).fadeIn('fast');
                })
            })
            document.title = title;
        },
        init: function (options) {
            // start menu animation
            if (options.animation) {
                TweenMax.staggerTo($(this), 0, {
                    scaleX: 0, scaleY: 0
                }, 0);
                TweenMax.staggerTo($(this), .5, {
                    scaleX: 1, scaleY: 1, ease: Back.easeOut
                }, .2);
            }
            // entrance page
            methods.pageReload(options);
            // browser history
            $(window).on("hashchange", function () {
                methods.pageReload(options);
            })
        }
    };

    $.fn.menuControl = function (options) {

        return methods.init.call(this, options);
    }
})($);
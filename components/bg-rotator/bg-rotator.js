(function ($) {
    $.fn.bgRotator = function (options) {

        var settings = $.extend({
            czasWyswietlania: 5000,
            czasPrzejscia: 1000
        }, options);


        var
            items = this,
            index = 0,
            interval,
            isPlay = true;

        items.eq(index).fadeIn(settings.czasPrzejscia);

        function go() {

            interval = setInterval(zmienZdjecie, settings.czasWyswietlania);
        }

        go();


        function zmienZdjecie() {
            index++;
            var indexNastepnegoZdjecia = index % items.length;

            items.eq(indexNastepnegoZdjecia - 1).fadeOut(settings.czasPrzejscia);
            items.eq(indexNastepnegoZdjecia).fadeIn(settings.czasPrzejscia);

        }

        return {
            toggle: function () {
                isPlay ? clearInterval(interval) : go();
                isPlay = !isPlay;
                $(document).trigger('toggle', isPlay);
            }
        }


    };

})(jQuery);

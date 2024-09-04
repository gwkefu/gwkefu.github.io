(function($) {
    $.backToTop = function(options) {
        var defaults = {
            showAfter: 300,
            animationSpeed: 500,
            scrollDistance: 10
        };
        var settings = $.extend(defaults, options);
        var $button = $('<button/>', {
            'class': 'back-to-top',
            'text': '返回顶部'
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > settings.scrollDistance) {
                $button.fadeIn(settings.animationSpeed);
            } else {
                $button.fadeOut(settings.animationSpeed);
            }
        });
        $button.click(function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, settings.animationSpeed);
        });
        $(document).ready(function() {
            $(document.body).append($button);
        });
    };
})(jQuery);

jQuery(document).ready(function($) {
    $.backToTop();
});
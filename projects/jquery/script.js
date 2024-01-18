$(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("active");
    $(".overlay").toggleClass("active");
    $(".menu-container").toggleClass("active");
});

var video = document.getElementById("video_background");
video.addEventListener("canplay", function () {
    setTimeout(function () {
        video.play();
    }, 6000);
});

function Utils() {}
Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();
$(window).on('load', addFadeIn());

$(window).scroll(function () {
    addFadeIn(true);
});

function addFadeIn(repeat) {
    var classToFadeIn = ".will-fadeIn";

    $(classToFadeIn).each(function (index) {
        var isElementInView = Utils.isElementInView($(this), false);
        if (isElementInView) {
            if (!($(this).hasClass('fadeInRight')) && !($(this).hasClass('fadeInLeft'))) {
                if (index % 2 == 0) $(this).addClass('fadeInRight');
                else $(this).addClass('fadeInLeft');
            }
        } else if (repeat) {
            $(this).removeClass('fadeInRight');
            $(this).removeClass('fadeInLeft');
        }
    });
}




jQuery(function ($) {

    var doAnimations = function () {

        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});

    ;$(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 420,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $(".scroll").on("click", "a", function(i) {
            i.preventDefault();
            var e = $(this).attr("href"),
                t = $(e).offset().top;
            $("body,html").animate({
                scrollTop: t
            }, 1500);
        });

    });

$(document).ready(function () {
    //header logo
    var headerLogo = $('.header-logo');
    $(headerLogo).on('click', function () {
        $('html,body').animate({
            scrollTop:0
        },800);
        return false;
    });
    // navigation
    var $secNav = $(".quick-nav ul li"),
        $contents = $(".main-panel .contents"),
        $doc = $("html,body");

    $secNav.on("click", "a", function () {
        var $target = $(this).parent(),
            idx = $target.index(),
            section = $contents.eq(idx),
            offsetTop = section.offset().top;
        $doc.stop().animate({
            scrollTop: offsetTop
        },800);
        return false;
    });

    // scroll 위치에 따른 섹션 이름
    $(window).scroll(function () {
        var scltop = $(window).scrollTop();
        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top - 250;

            if (targetTop <= scltop) {
                $secNav.removeClass("active");
                $secNav.eq(idx).addClass("active");
            }
        });
        // main visual 에서 navigation in/out
        var visualHeight = $contents.eq(1).offset().top - 300;
        (function mainNav() {
            if ($(this).scrollTop() > visualHeight) {
                $(".quick-nav").addClass("on");
            } else {
                $(".quick-nav").removeClass("on");
            }
        })();
    });
    // portfolio list click event
    var output = $('.list-item .photo-wrap');
    $(output).on("click", function () {
        var layout = $(this).parents(".list-item"),
            bio = layout.find(".output-bio"),
            bioHeight = bio.outerHeight() + 35;
        if( $(layout).hasClass("active") ){
            $(layout).removeClass("active").css("margin-bottom", "50px");
        } else {
            $('.list-item').removeClass("active").css("margin-bottom", "50px");
            $(layout).addClass("active").css("margin-bottom", bioHeight + "px");
        }
        return false;
    });

});
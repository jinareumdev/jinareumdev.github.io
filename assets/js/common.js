$(document).ready(function () {
    //global
    var $secNav = $(".quick-nav ul li"),
        $contents = $(".main-panel .contents"),
        $doc = $("html,body");

    // PC header logo
    var movingLogo = (function () {
        var headerLogo = $('.header-logo');
        $(headerLogo).on('click', function () {
            $doc.animate({
                scrollTop:0
            },800);
            return false;
        });
    })();
    // PC navigation
    var pcNav = (function () {
        $secNav.on("click", "a" , function () {
            var $target = $(this).parent(),
                idx = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop().animate({
                scrollTop: offsetTop
            },800);
            return false;
        });
    })();
    // MOBILE navigation
    var mobNav = (function () {
        var $mobLink = $(".mob-nav li");
        $mobLink.on("click" , "a" , function () {
            var $target = $(this).parent(),
                idx = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop().animate({
                scrollTop: offsetTop
            },800);
            return false;
        });
    })();

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
    // mobile gnb
    // var $menu = $("#mob-menu");
    // $menu.click(function () {
    //     console.log("menu");
    //     $(".menu-btn").addClass("none");
    //     $(".sidebar").addClass("toggle");
    //     $(".main-panel").addClass("toggle");
    //     $(".sidebar-dim").addClass("visible");
    // });

    // sidebar
    var layout = (function () {
        var html = $("html"),
            sideBtn = $("#mob-menu"),
            dimm = $(".sidebar-dim"),
            mob_size = 1400;

        $(sideBtn).click(function () {
            if( $(window).width() <= mob_size ) {
                $(html).toggleClass("sidebar-mo");
                $(dimm).toggleClass("visible");
            }
            else{ // pc
                $(html).removeClass("sidebar-mo");
                $(dimm).removeClass("visible");
            }
        });
        $(dimm).on("click", function () {
            $(html).removeClass("sidebar-mo");
            $(dimm).removeClass("visible");
        });
        // 페이지 로드시 사용자 반응아니고, 코드에 의해 click 이벤트 실행
        $(".side-close").click(function () {
           $(dimm).trigger("click");
        });
    })();
});

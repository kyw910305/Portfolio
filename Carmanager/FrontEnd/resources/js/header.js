var common = {
    menuSetting: function () {
        $(".subMenu, .menuBg").css('display', 'none');
        $("#gnb li, .menuBg").bind("click mouseover focusin", function () {
            $(".subMenu, .menuBg").stop().slideDown();
            $('#ui_left').stop().animate({
                marginTop: 160,
            }, 400)
        });
        $("#gnb li, .menuBg").bind("mouseout focusout", function () {
            $(".subMenu, .menuBg").stop().slideUp();
            $('#ui_left').stop().animate({
                marginTop: 0
            }, 400)
        });
    }
}

$(document).ready(function () {
    common.menuSetting();
})
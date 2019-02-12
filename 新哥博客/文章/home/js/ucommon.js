$(function () {
    $('.btn_set').bind("click", function () {
        $('.mod_tieset_fade').toggleClass("db"),
        $('.mod_cover').toggleClass("db")
    });
    //点击取消遮罩
    $(".mod_cover").bind("touchstart", function () {
        $('.mod_tieset_fade').removeClass('db'),
        $('.mod_cover').removeClass("db")
    });
})

//回到顶部
function goTopEx() {
    var obj = document.getElementById("goTopBtn");
    function getScrollTop() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        return scrollTop
    }
    function setScrollTop(value) {
        document.documentElement.scrollTop = value;
        document.body.scrollTop = value;
    }
    window.onscroll = function () { getScrollTop() > 0 ? obj.style.display = "" : obj.style.display = "none"; }
    obj.onclick = function () {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}

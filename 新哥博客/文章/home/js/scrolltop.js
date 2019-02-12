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
    window.onscroll = function () { getScrollTop() > 500 ? obj.style.display = "block" : obj.style.display = "none"; }
    obj.onclick = function () {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}
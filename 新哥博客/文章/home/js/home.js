var hisdatas = []; //缓存记录
$(function () {
    //头部切换
    $('.bread_k').bind("click", function () {
        $('.bread_item').toggleClass("nob");
        $('.bread_k').toggleClass("foc");
        $('.bread_bg').toggle();
    });
    $('.header_top').bind("click", function () {
        $('.header_top p').toggleClass("foc");
        var haosite = document.getElementById("hao");
        if (haosite.style.display == "none") {
            haosite.style.display = "block";
        } else {
            haosite.style.display = "none";
        }
    });
    /*滑动 begin*/
    var width = 0;
    var curwidth = 0;
    $("#div_scroll div a").each(function () {
        if ($(this).attr("id") != undefined && $(this).attr("id").length > 0) {
            curwidth = width;
        }
        width += $(this).width() + 16;
    });
    $("#div_scroll div").css("width", width);
    $("#div_scroll a").hover(function () {
        $("#div_scroll a").removeClass("zslion");
        $(this).addClass("zslion");
    }, function () { $(this).removeClass("zslion"); })
    $("#div_scroll").scrollLeft(curwidth);

    $("#divnav").hScrollPane({ mover: "div", moverW: function () {
        var width = 0; $("#div_scroll div a").each(function () {
            width += $(this).width() + 16;
        }); return width;
    } (), showArrow: true, handleCssAlter: "draghandlealter"
    });
    /*滑动 end*/

    $("input[type='hidden']").each(function () {
        if ($(this).attr("id") != undefined && $(this).attr("id").indexOf('hdnav_') >= 0) {
            var moreid = parseInt($(this).val());
            getmorelist(moreid, 22, 0);
        }
    });

    /*搜索 begin*/
    $('.item_search').click(function () {
        $('.header_search').show();
        $('.logo').hide();
        $('#text').focus();
        return false;
    });
    $('#close').click(function () {
        $('.header_search').hide();
        $('.logo').show();
        $('#text').val('');
    });
    /*搜索 end*/

    if ($("#hdpage").val() == "1") //将缓存设为null
        history.replaceState(null);
    /*历史缓存 begin*/
    var state = history.state;
    if (!!state) {
        history.replaceState(null, null); //将缓存设为null
        page = state.page;
        hisdatas = state.hisdatas;
        recoverData(hisdatas);
        var totalpage = state.totalpage;
        if (totalpage <= page) {
            $("#a_look_more").hide();
        }
        window.scrollTo(0, state.scrollY);
    }
    /*历史缓存 end*/
});

//顶部导航切换
function toggletopnav() {
    $('.bread_item').toggleClass("nob");
    $('.bread_k').toggleClass("foc");
    $('.bread_bg').toggle();
}

var page = 0;
//历史列表
function gethislist() {
    page++;
    var pageid = $("#hdpageid").val();
    var cdlxt = $("#hdcdlxt").val();
    $.ajax({
        url: "http://3g.lexun.com/homenew/hislist.aspx", //跨域URL
        data: { p: page, pageid: pageid, cdlxt: cdlxt },
        dataType: "jsonp",
        data: { p: page, pageid: pageid, cdlxt: cdlxt }, //参数
        jsonp: "jsoncallback", //默认callback
        timeout: 5000,
        success: function (json) {//客户端jquery预先定义好的callback函数，成功获取跨域服务器上的json数据后，会动态执行这个callback函数
            $(".yesterday").show();
            $(".yesterday").append(json[0].content);
            var totalpage = json[0].totalpage;
            if (totalpage <= page) {
                $("#a_look_more").hide();
            }
            $("#hdpage").val(page);
            //将数据推送到缓存
            hisdatas.push(json[0].content);
            var state = { scrollY: window.scrollY, page: page, totalpage: totalpage, hisdatas: hisdatas }
            history.pushState(state, "", window.location.href);
        }
    });
    //window.history.pushState(null, null, './index.aspx?pageid=' + pageid + '&p=' + page + '');
}

//还原历史数据
var recoverData = function (hisdatas) {
    for (i = 0; i < hisdatas.length; i++) {
        $(".yesterday").show();
        $(".yesterday").append(hisdatas[i]);
    }
};

//修改登录url和img
function setlogin(url, img) {
    $(".smallTx").attr("href", url);
    $(".login img").attr("src", img);
}

//更多列表
function getmorelist(moreid, styleid, areaid) {
    var cdlxt = $("#hdcdlxt").val();
    $.ajax({
        url: "http://3g.lexun.com/homenew/morelist.aspx?" + cdlxt, //跨域URL
        dataType: "jsonp",
        data: { moreid: moreid }, //参数
        jsonp: "jsoncallback", //默认callback
        timeout: 5000,
        success: function (json) {//客户端jquery预先定义好的callback函数，成功获取跨域服务器上的json数据后，会动态执行这个callback函数
            if (styleid == 12) { //推荐职场导航
                $("#moreul_" + moreid).append(json[0].content);
                $("#morebtn_" + moreid).hide();
                var url = $("#hdmoreurl_" + moreid).val();
                $("#morebtn_" + moreid).after("<a href=\"" + urladdlxt(url, cdlxt) + "\" class=\"news_moreBtn\">查看更多&nbsp;&nbsp;></a>");
            }
            else if (styleid == 22) { //双导航
                var objul = $("#li_" + moreid).parent();
                if ($("#div_" + areaid).length <= 0) {
                    if (areaid <= 0)
                        areaid = parseInt(objul.attr("id"));
                    objul.after("<div id=\"div_" + areaid + "\"></div>");
                }
                objul.children().removeClass("current");
                $("#li_" + moreid).addClass("current");
                $("#div_" + areaid).html(json[0].content);
            }
        }
    });
}

//追加串号
function urladdlxt(url, cdlxt) {
    if (url.indexOf('?') > 0)
        return url + "&" + cdlxt;
    else
        return url + "?" + cdlxt;
}

//检测form提交
function checksubmit() {
    if ($.trim($('#text').val()) == "") {
        $('.header_search').hide();
        $('.logo').show();
        return false;
    }
    return true;
}

//客户端注入JS
function opentouch() {
    window.imagelistner.opentouch();
    return true;
}
function closetouch() {
    window.imagelistner.closetouch();
    return true;
}

window.setInterval('showTime()',1000)
function showTime()
{
	var enabled = 0; 
	today = new Date();
	var day; 
	var date;
	if(today.getDay()==0) day = "星期日"
	if(today.getDay()==1) day = "星期一"
	if(today.getDay()==2) day = "星期二"
	if(today.getDay()==3) day = "星期三"
	if(today.getDay()==4) day = "星期四"
	if(today.getDay()==5) day = "星期五"
	if(today.getDay()==6) day = "星期六"
	date = (today.getFullYear()) + "年" + (today.getMonth() + 1 ) + "月" + today.getDate() + "日 " + day+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
	document.getElementById("time").innerHTML=date;
} 
function fcount(fid)
{
	var clickid=fid.id;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	  }
	xmlhttp.open('POST','count.php',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	var typeid='type=fun&fid='+clickid;
	xmlhttp.send(typeid);
}
function ucount(uid)
{
	var clickid=uid.id;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	  }
	xmlhttp.open('POST','count.php',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	var typeid='type=useful&uid='+clickid;
	xmlhttp.send(typeid);
}
function ecount(eid)
{
	var clickid=eid.id;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	  }
	xmlhttp.open('POST','count.php',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	var typeid='type=effect&eid='+clickid;
	xmlhttp.send(typeid);
}
function wcount(wid)
{
	var clickid=wid.id;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	  }
	xmlhttp.open('POST','count.php',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	var typeid='type=wx&wid='+clickid;
	xmlhttp.send(typeid);
}
function acount(aid)
{
	var clickid=aid.id;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	  }
	xmlhttp.open('POST','count.php',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	var typeid='type=api&aid='+clickid;
	xmlhttp.send(typeid);
}
function gcount(gid)
{
	var clickid=gid.id;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	  }
	xmlhttp.open('POST','count.php',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	var typeid='type=game&gid='+clickid;
	xmlhttp.send(typeid);
}
function search(){  
    var keyword=$("#getsearch").val();  
    $.ajax({  
        type:"GET",  
        url:'search.php',   
        dataType:"json",   
        data:{'keyword':keyword},  
        success: function (data) {  
                var html='';
                var inum=eval(data)[5][0];  
                for(i=0;i<inum;i++){  
                  html = html+'<a href="'+eval(data)[3][i]+'" target="_blank" onclick="gcount(this)" id="'+eval(data)[0][i]+'"><li class="item" style="width:50%;"><div class="i-head"><span class="open open1">'+eval(data)[2][i]+'</span><p>'+eval(data)[1][i]+'</p></div><div class="i-body"><p class="hot"><i class="fa fa-eye" aria-hidden="true"></i>'+eval(data)[4][i]+'</p><p class="goto"><i class="fa fa-sign-in" aria-hidden="true"></i>Go</p></div></li></a>';  
                  }  
                 $("#searchresult").html(html);  
        }  
    })
	if(keyword == ''){
		$("#searchresult").html('请输入关键词！');
	}
}  
$(function(){
	var navH = $(".nav-list").offset().top;
	$(window).scroll(function(){
		var scroH = $(this).scrollTop();
		if(scroH>=navH){
		$(".nav-list").css({"position":"fixed","top":0});
		}else if(scroH<navH){
		$(".nav-list").css({"position":"static"});
		}
	})
})
var scrolltotop={
	setting:{
		startline:100,
		scrollto:0,
		scrollduration:400,
		fadeduration:[500,100]
	},
	controlHTML:'<i class="fa fa-chevron-up" aria-hidden="true"></i>',
	controlattrs:{offsetx:40,offsety:50},
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div class="runtop">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"返回顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();

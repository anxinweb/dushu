看书
---
-

> 1、【[每日一文](https://meiriyiwen.com/)】
>
> 2、【[owllook](https://www.owllook.net/md/qidian)】
>
> 3、【[顶点小说](https://m.x23us.com/)】
>
> 4、【[燃小说](https://m.ranwena.com/)】
>
> 5、【[看哥追书](https://m.seego.co/)】
>
> 6、【[吾爱中文网](http://m.5izww.com/)】
>
> 6、【[免费小说之王（小米）]( 
--远程更换网站

Http.get("https://fangsxin.github.io/dushu/%E6%96%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/%E8%BF%9C%E7%A8%8B%E6%9B%B4%E6%8D%A2%E7%BD%91%E7%AB%99/%E5%BD%B1%E8%A7%86/",nil,nil,nil,function(code,content)

--要浏览的网站
网站=content:match("【网站】(.-)【网站】")
加载网页(网站)

--全局JS脚本
config.global_js=content:match("【全局】(.-)【全局】")

--域名或URL
config.web_control[1].url=content:match("【域名】(.-)【域名】")

--删除元素(可选)
config.web_control[1].remove_element=content:match("【元素】(.-)【元素】")

--JavaScript(可选)
config.web_control[1].js=content:match("【js】(.-)【js】")

end))】




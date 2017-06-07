# webzuoye
期末作业
课程报告
1、	站点的策划与构思
本站点以游戏尼尔机械纪元为主题，为大家介绍了尼尔机械纪元的故事背景以及故事梗概，主要出场人物和武器等，并且还为大家安利了尼尔机械纪元精彩壁纸等。最后为大家提供了下载链接，可以下载游戏本体和破解补丁以及汉化补丁甚至是修改器。
		另外，关于此次网站的构建的一些思路与技术难点：①整体框架——一开始构建网站时，脑子里面的思路确实不错，所以觉得自己能做出很漂亮的网页，但就在下手开始做的时候，完全不知道从哪开始，效果和自己开始想的完全不一样。一段时间很失落，之后我就开始上网查找一些关于网页排版的分享，寻找我喜欢，用得到的版式。最后在网络上找到了一个合适的版式，解决了版面问题。②背景音乐——我期待在浏览我的网站的时候能有一首优美的歌曲伴随在耳边，于是我在网上搜索了一下尼尔机械纪元的背景音乐，由于这个游戏也比较火，所以很容易搜到最后我成功设置了一首我喜欢的音乐当背景音乐。③元素之间的定位——在构建网站时的一个大问题就是元素之间的定位。就像画家手中的画笔一样，想往哪里点一笔就点一笔，想把哪个元素放哪里就放哪里。我所想要的是这样的意境，但往往是各种元素之间位置的各种不确定。每次既定好的元素位置，在设计出来时总是不尽人意，这让我很是沮丧。在仔细翻阅课本了解了各元素的属性后我再一次进行了设计，这一次的设计能达到我的位置需求，但是整个版式确很糟糕，之后在对一个个的元素属性都进行了各种改变调试后，讲样式调到了我想要的版式。这次障碍让我意识到一个问题，基础的东西才是最重要的。④JS——开始我在网上看到许多特别炫酷的插件，许多都想想用到自己的网页上。但是后来自己开始做自己的网页时却不知道怎么用，最后成功应用了图片轮播插件以及幻灯片播放和鼠标经过高亮插件。之后由于游戏人物众多，如果全部写就导致篇幅过长，于是在网上找到淡入淡入效果切换，所有人物共同占用一个空间⑤导航栏，网页开头用了一般的导航栏，在后来，在网上看到炫酷的六边形蜂窝型导航，我彻底被折服，于是，在之后的人物介绍板块使用了这样的导航，再加上DIV CSS设置每个人物背景图片，效果特别炫酷。 
2、	页面结构:
网页分为5个板块，①游戏资讯，在这一个板块我主要介绍了尼尔机械纪元的背景故事以及一些DLC和一些官方消息。②人物介绍，这一部分我主要给大家介绍了主要人物，还贴上了人物高清壁纸，还是非常有必要看一下的。③武器系统，虽然这个游戏背景故事非常精彩，感动了很多人，但是武器系统绝对也是一大特别，没把武器都有特殊的属性的技能，以及芯片，带上芯片能让你刷图事半功倍。④高清壁纸，这个部分是我在网上找的一些个人比较喜欢的图片，加上幻灯片播放，绝对大饱眼福。⑤资源下载，由于官方定价特别坑，导致许多玩家望而却步，没关系，在这里我给大家准备了下载链接，可以下载网上的游戏本体和汉化补丁，当然你要实在打不过也可以下载修改器，最后还是希望大家去官方支持正版。
3、	构建软件的使用
关于构建软件，我并未选择什么便捷的软件，只是使用普通的sublime text3。
4、	云服务器的构建步骤
因为初次接触这些新东西，完全不知道应该怎么弄，在百度上按照百度经验一步步操作，发现云服务器没有一次性支付的，要么就是按月付费，要么就是计时收费，即便关机仍处于收费状态，对学生而言确实很坑。在很多次的尝试后我看到了一个视频教程，服务器可以购买香港的服务器，这样既是一次性付费一年，非常便宜，并且还不用备案，着实方便至极。
5、	域名的申请、备案、设置
申请：域名是在阿里云购买的一级域名————5556686.com。 
备案：准备材料，上交身份证复印件以及配有个人亲笔签名的一份正反面复印件。 
设置：域名解析，记录类型————A，主机记录————@，线路类型————默认，记录值————119.9.116.130。
6、	插件的使用
在上面提到过，我用了许多jQuery插件，感觉许多都不错，图片轮播插件，可以自动切换图片，以及自己切换，方便访客自由观看 
鼠标经过图片高亮插件，在人物介绍里鼠标通过则背景人物图片会亮，加上淡入淡出，点击则会切到该人物介绍页面。整个代码编写过程可以说是相当痛苦，借鉴了相当多的网上分享的代码和插件。当然最后完成的效果还不错，感觉和后台敲代码是完全不同的体验，虽然过程同样枯燥，后台编写出自己的游戏啊什么的特别兴奋，而且网上可借鉴的不多，大部分要靠自己写，而web前端开发的话，网上可借鉴的版式较多，但大多不是自己想要的效果，而对于像我们这样没经验的人来说要编写出比较漂亮的网页比较难
7、	百度站长工具的使用与运营情况
先在网上注册了一个百度账号，之后登陆站长工具平台上传了自己的网站，添加了自己网站的一些属性，最终完成了验证。搜索主题时，由于此类相同主题网站过多，一时难以搜到，之后我直接搜域名才搜到了。借助友盟，我实现了站点流量统计和访问统计。运营情况：由于介绍这个游戏的网站非常多，而且功能都特别全。因此，我的网站基本没什么人访问，访问次数都是自己在编写的时候查看效果加的，访客本来只有我自己，我硬拉上室友让他访问了一下，目前还没有其他人访问我的网站。


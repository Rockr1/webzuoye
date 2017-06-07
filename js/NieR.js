/************************************函数变量*************************************************/


/*****************************************加载执行************************************/

$(function(){
    // 轮播图
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic'),
        lst = document.getElementById('lst').getElementsByTagName('li'),
        index = 0,
        timer = null;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(autoplay, 3000);
    function autoplay() {
        index++;
        if (index >= lst.length) {
            index = 0;
        }
        changeoptions(index);
    }

    wrap.onmouseover = function () {
        clearInterval(timer);
    };
    wrap.onmouseout = function () {
        timer = setInterval(autoplay, 3000);
    };

    for (i = 0; i < lst.length; i++) {
        lst[i].id = i;
        lst[i].onmouseover = function () {
            clearInterval(timer);
            changeoptions(this.id);
        }

    }

    function changeoptions(curindex) {
        for (j = 0; j < lst.length; j++) {
            lst[j].className = '';
            pic.style.top = 0;
        }
        lst[curindex].className = 'active';
        pic.style.top = -curindex * 358 + 'px';
        index = curindex;
    }

    // 人物介绍

    $(".character > div").click(function () {
        $(this).addClass("active").siblings("div").removeClass("active");
        $(".detail-chars > div").eq($(this).index()-1).fadeIn(1000).siblings("div").fadeOut(500);
    });

    // 战斗系统

    $(".weapon-bg ul").eq(0).show().siblings("ul").hide();
    $(".intro a").eq(0).show().siblings().hide();
    $(".img-show .wq").eq(0).show().siblings().hide();
    $(".fight-nav > span").click(function () {
        $(this).addClass("active").siblings("span").removeClass("active");
        $(".weapon-bg > ul").eq($(this).index()).show().siblings("ul").hide();
    });



// 战斗基础
    $(".nav-zdjc").click(function () {
        $(".zdjc").show().siblings('div').hide();
    });
// 武器
    $(".nav-wq").click(function () {
        $(".wq").show().siblings('div').hide();
    });
// 芯片
    $(".nav-xp").click(function () {
        $(".xp").show().siblings('div').hide();
    });
// 自动模式
    $(".nav-dms").click(function () {
        $(".dms").show().siblings('div').hide();
    });
// pod
    $(".nav-pod").click(function () {
        $(".pod").show().siblings('div').hide();
    });
    $(".choose > li").click(function () {
        $(this).addClass("crt-role").siblings().removeClass("crt-role");
        $(".intro a").eq($(this).index()).show().siblings().hide();
    });


    $(".zdjc .ty-btn div").click(function () {
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
        $(".zdjc img").eq($(this).index()).show().siblings("img").hide();
    });

    $(".xp .ty-btn div").click(function () {
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
        $(".xp img").eq($(this).index()).show().siblings("img").hide();
    });

    $(".pod .ty-btn div").click(function () {
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
        $(".pod img").eq($(this).index()).show().siblings("img").hide();
    });


    $(".psj-btn").click(function () {
        $(".wq .psj").show().siblings("div").hide()
    });
    $(".ssj-btn").click(function () {
        $(".wq .ssj").show().siblings("div").hide()
    });
    $(".gun-btn").click(function () {
        $(".wq .gun").show().siblings("div").hide()
    });
    $(".gd-btn").click(function () {
        $(".wq .gd").show().siblings("div").hide()
    });

    $(".ty-btn .ty-l").click(function () {
        $("#ssjI1").show().siblings("img").hide();
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
    });
    $(".ty-btn .ty-r").click(function () {
        $("#ssjI2").show().siblings("img").hide();
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
    });
    $(".ty-btn .ty-l").click(function () {
        $("#psjI1").show().siblings("img").hide();
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
    });
    $(".ty-btn .ty-r").click(function () {
        $("#psjI2").show().siblings("img").hide();
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
    });

    $(".ty-btn .ty-l").click(function () {
        $("#gd1").show().siblings("img").hide();
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
    });
    $(".ty-btn .ty-r").click(function () {
        $("#gd2").show().siblings("img").hide();
        $(this).addClass('current-ty').siblings('div').removeClass('current-ty');
    });

    $(".detail-chars div").eq(0).show().siblings("div").hide();

    // click pic show and carousel
    var currentImg;
    $(".first-char #featureImg a").click(function () {
        currentImg = $(this).data("index");
        console.log(currentImg);
        $(".popup p#popImgBox").show().siblings("p").hide();
        $("#popImgBox img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();

    });
    $(".second-char #featureImgs a").click(function () {
        currentImg = $(this).data("index");
        $(".popup p#popImgBoxs").show().siblings("p").hide();
        $("#popImgBoxs img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".third-char #featureImga a").click(function () {
        currentImg = $(this).data("index");
        $(".popup p#popImgBoxa").show().siblings("p").hide();
        $("#popImgBoxa img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".forth-char #featureImgp a").click(function () {
        currentImg = $(this).data("index");
        $(".popup p#popImgBoxp").show().siblings("p").hide();
        $("#popImgBoxp img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".fifth-char #featureImgi a").click(function () {
        currentImg = $(this).data("index");
        $(".popup p#popImgBoxi").show().siblings("p").hide();
        $("#popImgBoxi img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });
    $(".sixth-char #featureImgt a").click(function () {
        currentImg = $(this).data("index");
        $(".popup p#popImgBoxt").show().siblings("p").hide();
        $("#popImgBoxt img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".seventh-char #featureImgy a").click(function () {
        $(".popup p#popImgBoxy").show().siblings("p").hide();
        $("#popImgBoxy img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".eighth-char #featureImgpa a").click(function () {
        currentImg = $(this).data("index");
        $("#popImgBoxpa img").eq($(this).index()).show().siblings().hide();
        $(".popup p#popImgBoxpa").show().siblings("p").hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".ninth-char #featureImgd a").click(function () {
        currentImg = $(this).data("index");
        $("#popImgBoxd img").eq($(this).index()).show().siblings().hide();
        $(".popup p#popImgBoxd").show().siblings("p").hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".tenth-char #featureImgam a").click(function () {
        $(".popup p#popImgBoxam").show().siblings("p").hide();
        $("#popImgBoxam img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });
    $(".elev-char #featureImgyl a").click(function () {
        $(".popup p#popImgBoxyl").show().siblings("p").hide();
        $("#popImgBoxyl img").eq($(this).index()).show().siblings().hide();
        $(".popup").show();
        $("#maskLayer").show();
    });

    $(".popclose").click(function () {
       $(".popup").hide();
       $('#maskLayer').hide();
    });

     $(function(){
 $('#maskLayer').bind("click",function(e){
  var target  = $(e.target);//表示当前对象，切记，如果没有e这个参数，即表示整个BODY对象
  if(target.closest(".popup").length == 0){
   $(".popup").hide();
   $('#maskLayer').hide();
  }
 }) 
}) 
    // 2b
    
    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%3+1;
        $("#popImgBox img").hide();
        $("#popImgBox #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%3 + 1;
        $("#popImgBox img").hide();
        $("#popImgBox #img" + currentImg).show();

    });
    // 9s

    $("#popNext").click(function () {
        
        currentImg = parseInt(currentImg)%3+1;
        $("#popImgBoxs img").hide();
        $("#popImgBoxs #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        
        currentImg = parseInt(currentImg)%3 + 1;
        $("#popImgBoxs img").hide();
        $("#popImgBoxs #img" + currentImg).show();

    });
    // a2
    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%3+1;
        $("#popImgBoxa img").hide();
        $("#popImgBoxa #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%3 + 1;
        $("#popImgBoxa img").hide();
        $("#popImgBoxa #img" + currentImg).show();

    });
    // pod

    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%2+1;
        $("#popImgBoxp img").hide();
        $("#popImgBoxp #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%2 + 1;
        $("#popImgBoxp img").hide();
        $("#popImgBoxp #img" + currentImg).show();

    });
    // slg

    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%2+1;
        $("#popImgBoxi img").hide();
        $("#popImgBoxi #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%2 + 1;
        $("#popImgBoxi img").hide();
        $("#popImgBoxi #img" + currentImg).show();

    });

// txg

    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%2+1;
        $("#popImgBoxt img").hide();
        $("#popImgBoxt #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%2 + 1;
        $("#popImgBoxt img").hide();
        $("#popImgBoxt #img" + currentImg).show();

    });

    // pascal

    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%3+1;
        $("#popImgBoxpa img").hide();
        $("#popImgBoxpa #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%3 + 1;
        $("#popImgBoxpa img").hide();
        $("#popImgBoxpa #img" + currentImg).show();

    });
    // dlb

    $("#popNext").click(function () {
        currentImg = parseInt(currentImg)%2+1;
        $("#popImgBoxd img").hide();
        $("#popImgBoxd #img" + currentImg).show();

    });

    $("#popPrev").click(function () {
        currentImg = parseInt(currentImg)%2 + 1;
        $("#popImgBoxd img").hide();
        $("#popImgBoxd #img" + currentImg).show();

    });

    // 高清壁纸
    $(".pic_cont > a img:not(:first-child)").hide();
    // $('#pic_right').click(function() {
    //     $("carousel-num span").eq($(this).index()+1).addClass('current-num').siblings('span').removeClass('current-num')
    // })
});
/**
 * Created by Tech on 2017/2/22.
 */
(function(){
    var oContain=document.getElementById("vr_pic_con");
    var oMt=document.getElementById("stm");
    var oLt=document.getElementById("pic_left");
    var oRt=document.getElementById("pic_right");
    var aP=oMt.children;
    var iLen=aP.length;
    var result=true;
    var Lresult=true;
    var iWidth=aP[0].clientWidth;
    inum=1;
    $("div[index='1']").show();
    oMt.style.width=iLen*iWidth+"px";
    oRt.onclick=function(){
        autostart();
    };
    oLt.onclick=function(){

        if(Lresult){
            inum--;
            if(inum<0) inum=iLen-1;
            Lresult=false;
            oMt.insertBefore(oMt.children[iLen-1].cloneNode(true),oMt.children[0]);
            oMt.style.left=-iWidth+"px";
            $(oMt).animate({left:0},1000,function(){
                oMt.removeChild(oMt.children[iLen]);
                $("div[index]").hide();
                $("div[index='"+inum+"']").show();
                Lresult=true;
            });
        }

    };
    function autostart(){

        if(result){
            inum++;
            if(inum>iLen-1) inum=0;
            result=false;
            oMt.appendChild(oMt.children[0].cloneNode(true));
            console.log($("#stm li").length);
            $(oMt).animate({left:-iWidth},1000,function(){
                oMt.removeChild(oMt.children[0]);
                oMt.style.left="0px";
                $("div[index]").hide();
                $("div[index='"+inum+"']").show();
                result=true;
            });
        }
    }
    var timer=setInterval(autostart,4000);
    oContain.onmouseover=function(){
        clearInterval(timer);
    };
    oContain.onmouseout=function(){
        timer=setInterval(autostart,4000);
    }
})();
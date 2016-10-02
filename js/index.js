/*banner轮播*/
function lunboBanner(){
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oImg=document.getElementById("pic");
	var oBox=document.getElementsByClassName("box")[0];
	var aDiv=oBox.getElementsByTagName("div");;
	var num=0;
	var timer=null;
	var aSrc=["../images/bg.jpg","../images/bg1.jpg","../images/bgaa.jpg"];
	oPrev.onclick=function(){
		clearInterval(timer);//清除自动播放
		num--;
		if(num==-1){num=aSrc.length-1;}
		oImg.src=aSrc[num];
		modify(num);
		timer=setInterval(showNext,4000);//开启自动播放
	};
	oNext.onclick=function(){
		clearInterval(timer);//清除自动播放
		num++;
		if(num==aSrc.length){num=0;}
		oImg.src=aSrc[num];
		modify(num);
		timer=setInterval(showNext,4000);//开启自动播放
	};
	for(var i=0;i<aSrc.length;i++){//点击四个小圆点
	
		aDiv[i].index=i;//把i的值赋给aDiv的index属性
		aDiv[i].onclick=function(){
			num=this.index;
			modify(this.index);
		};
	}
	function modify(num){
		oImg.src=aSrc[num];
		for(var j=0;j<aDiv.length;j++){//变成小红点
			aDiv[j].className="circle"+j;
		}
		aDiv[num].className+=" active";//等于aDiv[num].className="circle active"
	}
	function showNext(){//自动播放
		num++;
		if(num==aSrc.length){num=0;}
		modify(num);
		// oImg.src=aSrc[num];

	}
	timer=setInterval(showNext,4000);//每隔2s自动播放下一张
	oImg.onmouseover=function(){
		clearInterval(timer);
	}
	oImg.onmouseout=function(){
	timer=setInterval(showNext,4000);
	}
}
/*图片旋转*/
function showImg(){
	var index=0;
	var picsPath=[
		'../images/1.jpg',
		'../images/2.jpg',
		'../images/3.jpg',
		'../images/pic10.jpg',
		'../images/pic11.jpg',
		'../images/pic12.jpg',
		'../images/pic5.jpg',
		'../images/pic6.jpg',
		'../images/pic4.jpg'
	];
	//拼接html显示图片
	var htmlImgs='',rotate=360/picsPath.length;
	for(var i=0;i<picsPath.length;i++){
		// document.createElement('img');或：
		htmlImgs+='<img src=\"'+picsPath[i]+'\">';
	}
	var container=document.getElementById('container');			
	container.innerHTML=htmlImgs;
	//让图片成为旋转木马布局
	var transZ=(container.offsetWidth/2)/Math.tan((rotate/2/180)*Math.PI);
	var imgs=Array.prototype.slice.call(container.getElementsByTagName('img'),0);
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.transform='rotateY('+i*rotate+'deg) translateZ('+(transZ+20)+'px)';
	}
	container.onclick=function(){
		 // 顺时针转				
		this.style.transform='rotateY('+(-1*rotate*++index)+'deg)';
		//逆时针转
	};
}
/*高端定制图片轮播*/
function lunboHight(){
    var omain=document.getElementById("pics");
	var oul=omain.getElementsByTagName("ul")[0];
	var lis=omain.getElementsByTagName("li");
	var speed=2;
	oul.innerHTML=oul.innerHTML+oul.innerHTML;
	oul.style.width=lis[0].offsetWidth*lis.length+"px";
	function move(){
		// 往左边移动
		if(oul.offsetLeft<-oul.offsetWidth/2){
			oul.style.left='0';
		}
		// oul.style.left=oul.offsetLeft-2+"px";
		// 往右边移动
		if(oul.offsetLeft>0){
			oul.style.left=-oul.offsetWidth/2+"px";
		}
		    	oul.style.left=oul.offsetLeft+speed+"px";	
	}
	var timer=setInterval(move,40);
	omain.onmouseover=function(){
		clearInterval(timer);
	}
	omain.onmouseout=function(){
		timer=setInterval(move,40);
	}
}

window.onload=function(){
	lunboBanner();
	showImg();
	lunboHight();
	/*菜单显示隐藏*/
	$(function(){
		$(window).scroll(function () {
	      if ($(window).scrollTop() > 650) {
	        $("#fade").fadeIn(300);//fadeIn淡入淡出
	      }
	      else {
	        $("#fade").fadeOut(300);
	      }
	    });
	});
};
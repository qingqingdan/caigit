/*banner轮播*/
function lunboBanner(){
	var current=0;
	var header=document.getElementsByClassName("header")[0];
	var lunbo=document.getElementsByClassName("lunbo")[0];
	var imgs=lunbo.getElementsByTagName("img");
	var right=document.getElementById("right");
	var num=0;
	var timer=null;
	function next(){
		imgs[current].className="";
 		current=current+1>imgs.length-1?0:current+1;
 		imgs[current].className="selected";
	}
	timer=setInterval(next,4000);
	imgs.onmouseover=function(){
		clearInterval(timer);
	}
	imgs.onmouseout=function(){
	timer=setInterval(showNext,4000);
	}	
}
function ditu(){
	var map = new AMap.Map('mapa', {
		zoom: 10,
		center: [116.39, 39.9]
	});
}
window.onload=function(){
	lunboBanner();
	ditu();
};
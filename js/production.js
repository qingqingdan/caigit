/*作品列表tab选项卡*/
function tabProduction(){
	var lis=null,contents=null;	
	var tab=document.getElementById('tab');
	lis=Array.prototype.slice.call(
		tab.getElementsByTagName('li'),0);
	var tab_content=document.getElementById('tab_content');
	// contents=Array.prototype.slice.call(
	// 	tab_content.getElementsByTagName('contenta'),0);
	contents=document.getElementsByClassName("contenta");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;//给li设置index属性
		lis[i].onclick=function(){
			if(this.className=='cur') return;
			for(var i=0;i<lis.length;i++){
				if(lis[i].className=="cur")
					contents[lis[i].index].className="contenta disapper";
				lis[i].className="";
			}
			this.className="cur";
			contents[this.index].className="contenta show";
		};
	}

}
/*banner轮播*/
function lunboBanner(){
	var current=0;
	var header=document.getElementsByClassName("header")[0];
	var lunbo=document.getElementsByClassName("lunbo")[0];
	var imgs=lunbo.getElementsByTagName("img");
	var right=document.getElementById("right");
	var aSrc=["images/bg1.jpg","images/bg2.png","images/bg17.jpg"];
	var num=0;

	setInterval(function(){
		imgs[current].className="";
 		current=current+1>imgs.length-1?0:current+1;
 		imgs[current].className="selected";
	},4000);
	for(var i=0;i<imgs.length;i++){
		right.onclick=function(){
			
		};
	}
}
window.onload=function(){
	tabProduction();
	lunboBanner();
};
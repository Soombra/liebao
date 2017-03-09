var pre=document.getElementById("pre"),
		next=document.getElementById("next");
	var banner=document.getElementById("banner");
	var timer;
	var bt_left=document.getElementById("bt_left");
	var bt_right=document.getElementById("bt_right");

window.onload=function(){
	
	pre.onclick=function(){
		bannerChange();
	}
	next.onclick=function(){
		bannerChange();
	}
	bt_left.onclick=function(){
		changeOrange();
	}
	bt_right.onclick=function(){
		changeBlue();
	}
	//timer=setTimeout(bannerChange,3000);

}

function bannerChange(){
	if(banner.className=="banner orange"){
		changeBlue();
		return;
	}
	changeOrange();
}

function changeOrange(){
	banner.className="banner orange";
	bt_left.className="span_active";
	bt_right.className="";
	clearTimeout(timer);
	timer=setTimeout(bannerChange,3000);
}

function changeBlue(){
	banner.className="banner blue";
	bt_left.className="";
	bt_right.className="span_active";
	clearTimeout(timer);
	timer=setTimeout(bannerChange,3000);
}
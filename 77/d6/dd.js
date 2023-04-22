var aa = [
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2MzIwMTA4MTQzMTI0NTkvbXBzL2E3NzdiZjFhNTEyMTRhNDk4N2MwN2FkYjdlMjRiZDdiNjUxMTMubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NDcwODY2NjEwOTQ0MjMvbXBzLzI2YWI2MmU1ZTUyZDQ2OTI4YmFmMjc2NTU4MmVjODA5Njc0MjUubXA0', 
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NTYxNTU1ODM4OTI1MTAvbXBzLzlmYjljYzE5ODQ1ZTRlZGFiNjU4NzQ4ZTBmNzdiNzNiNzAyODUubXA0', 
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2Njc3Mjc1NDQxMTExNjkvbXBzLzdjYWViNmEzZjE2YTRlNWViZTc5MDEzYmQxOTc5YmQ2NzQ3MTQubXA0', 
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2NzYzNzQ3ODE0MTI0MTMvbXBzL2YyYmY0YmZjOTk4MjQ5NDJhYjVmZjdhZDBmMmQzNzEyNzY1MTgubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM2ODk4NzM1OTI4MjkwMDIvbXBzL2U5YmE3NTM4MDA1OTRmZDhiNmY2ZTU0OGY3ZmVjOGU4Nzk3NDUubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MDEzNjYzNjUyNDM0MzUvbXBzL2QwOGM2YjYwNGFlODRlMzg4Njc2YjFlOWRkY2U0OTk2ODQyNDcubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MDE1OTg2MTQ2MDU4NDMvbXBzLzA3YTUyMmJjODM1NjQ0ZjFhN2RkZjE5OWIwZTJiMjg2ODQ0NTkubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MTAwNDExNzUzNzk5NjgvbXBzLzRlNDRhMzVkOTFkZTQwN2NiYWJhOWE4ZDkzYjVjNjlhODY0NjUubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MTIzMTY1MTIwMjc2OTMvbXBzLzk1ODc0MzljNTE1NzQ1Yzc5Y2ZlNDFkM2JmNThlYzkzODc2OTAubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MTI2Njg2NjE3MzEzNjgvbXBzLzg0MDY3YWQ3NmQyMjQ5MDhhZWE4NzUxNmViYWMwN2MyODc1MjYubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MjIyMDMxMDQ2OTMzMDkvbXBzLzQ1MmNjODZjM2IyZDQ3NDk5MTkyYTk1NTJlMDg4OWJhODkyMDkubXA0', 
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MjUzMzA1MzgxODY4MTMvbXBzLzEzNWQ0MjBhN2IzYzRlZDVhZDc3OWZkNGY2YmM4YTc1OTAxMDEubXA0', 
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MjY3MzMzMjkxODg4NjUvbXBzLzc1YjZhNzc3NDg3ZDRmYzlhYjAyZDdhMzIwYzYxZDYwOTAyOTIubXA0', 
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MzQ2MTg2MjA4NDA5ODcvbXBzLzRlYjQyOWNmNTM3MTQ5ODY5ZTgyNTlhZDk3NzEzNDU4OTMzNTAubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MzQ2MTg2MjA4NDA5ODcvbXBzLzRlYjQyOWNmNTM3MTQ5ODY5ZTgyNTlhZDk3NzEzNDU4OTMzNTAubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3MzcwNTc0OTgzODU0ODgvbXBzLzllNmRhMjI3ZTMxNDQ2ZDFhZGFlYjJkOTNlZWRjMzA2OTQ4MTkubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NDc0OTY5NTg1MTAxNDIvbXBzLzc2NDViN2U5OGRkMjQyZmE4OGVkODZkNWVjYjA4YTgwOTg4NzMubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NDg1NTE5MDg5MzU2ODMvbXBzLzI4NTE0YTExNDk2NDRhZmFhNWRkYTBhNGU3YTRjNDY3OTkxODMubXA0',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NTY3NTk0OTEwMzYyNTMvbXBzLzQ0M2ExZWU3N2JkNDQ0Nzk5YTg0Mzg2MTMxYmFiYThlMTAxMTg2Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NTg3NDU3NTc1NjYwMTYvbXBzL2RhMDg2YjExNmIxMDQzNTViMGJjOGU0ZGMzZTI2MjcyMTAyNzQ0Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NTkwNjQyNjE2MDk1MTYvbXBzLzc5ZjNkZGUwOTNlZTQ3NzA4YjhlZTJhNmRkZTgxZjdjMTAyMzQyLm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NjAzMDczOTI2Mjk4NTkvbXBzLzJhN2NkN2U1YWE1MzQ3ZjE4ZjhkNjk0ZGEyYmIwYTY3MTAzMzc4Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NzEwMTU0MjAzMzIwNTAvbXBzL2ZlZjFmMDQ0MTdhNTQ2YjA5ZDYzZDY5YmU5ZWFmMWMzMTA2NDg0Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3NzIxMzg5NTAxMTk0OTcvbXBzL2U4NWYwNGU2MWYwODQwM2Q5MDcwYzJiZDZlOGM0NDIxMTA2NTQ2Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3Nzg5Mzg2OTMyNDA4MzIvbXBzL2JmNjRiMmI1ODcwMzQ5OTdhNDcyZDg5ODIwYzBkMmNlMTA3OTAzLm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODA0NTIzMTQwMDc1ODkvbXBzL2U1NzM5NDg1N2RiZTQ4MWQ4N2RjYmY3YjJmZjA3ODkxMTA5MjA2Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODA3MTI1NTk2OTE3OTUvbXBzLzE1MjZhMWYwOWFhNDRmYmJiNTQ2NDljZGI4MDBiZDQ3MTA5Mzc3Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODI0MDM5MTgyODY5MzMvbXBzLzY1MWIyOTNjN2I5NzRmZTdhZjk1M2UzMGI1OTg3MWRlMTA5NzM3Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODI1MTU1NDg5MDAzOTEvbXBzLzNhNzA2YzM0MDViZDQxNjE5ODgzNDYxOWU1YjI4M2IzMTEwMjgxLm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODg2NTgyMjQxNTY3MjkvbXBzLzAxZmJiZTQxMjgxYTQ2M2I4MTEzYzhhM2VmYTA4MjdmMTExMDcyLm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3ODkxNzEyODQwMDM4NTcvbXBzL2EwZTgxODQ2ODAxMDRhNGViY2Q5ZGU3NDNhYWJhYTIzMTEwOTg1Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTA4MzYzNjY4NTUyMjAvbXBzLzRkZDE2NDRhMTE1NjQ3YThhOGQxOTkyYjI5ZGEyNWNlMTExNjE4Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTI0MTkwMjMxMTMzMDgvbXBzL2Q1MzE2ZDlmMDJlNzRhZTg4MzgyZDk4NDZhODJjZWY4MTEyMjUzLm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTQzNjUwNjEyODc5NDAvbXBzLzcyODk0YWRlODY4ZDRmNDNiYjBlYTNmZjk3ZTliNWM1MTEzMjQ2Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM3OTk2OTU1OTY5OTg3MTgvbXBzL2Y3ZTI2NGMxMTUyMjQ0NDJiYzIxZjlhYWUwNGZmYjg4MTEzMjI0Lm1wNA',
    'https://vip86.github.io/b.html?url=aHR0cHM6Ly9nZGVzaWduLWRhbS5kYW5jZi5jb20vMjM4NzAwNjg1ODM4NDQ4ODUvbXBzLzU2MzA1NmI1MTlhNDRjZDZhYWI5NTc1N2UwMTZmMWEyMTQ1Lm1wNA',
    '',
    '',
    '',
     
     
     
     
     
    ];
var sj = aa[Math.floor(Math.random()*aa.length)];

function setCookie(name,value){
  var Days = 1;
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

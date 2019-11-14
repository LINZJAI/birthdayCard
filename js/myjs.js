window.onload = function(){
var music = document.getElementById('muc');
var mes_bg = document.getElementById('mes-bg');
var mes_con = document.getElementById('mes-con');
var audio = document.getElementsByTagName('audio')[0];
var aaa = document.getElementById('aaa');
var close = document.getElementById('close');
var p3_but = document.getElementById('p3-but');
var p3_1 = document.getElementById('p3-1');
var p3_2 = document.getElementById('p3-2');
var pg3_wz1 = document.getElementById('pg3-wz1');
var pg3_wz2 = document.getElementById('pg3-wz2');
var close_p3 = document.getElementById('close-p3');
var p4_but = document.getElementById('p4-but');
var con_0 = document.getElementById('con-0');
var con_1 = document.getElementById('con-1');
var con_2 = document.getElementById('con-2');
var loada = document.getElementById('loada');
var a = 0;
loada.style.display = 'none';
music.addEventListener("touchstart",function(event){
	if(audio.paused){
       audio.play();
       this.style.animationPlayState = "running";
       this.style.webkitanimationPlayState = "running";
	} 
	else{
		audio.pause();
       this.style.animationPlayState = "paused";
       this.style.webkitanimationPlayState = "paused";
	}
},false);
function page2(){
   aaa.setAttribute('class','aaa aaaplay');
}
aaa.onclick=function(){
	mes_bg.style.display = "block";
	mes_con.style.display = "block";
    mes_con.setAttribute('class','mes-con mesplay')
}
close.onclick=function(){
	mes_bg.style.display = "none";
	mes_con.style.display = "none";
}
p3_but.onclick=function(){
	p3_1.style.display = "none";
	p3_2.style.display = "block";
	pg3_wz1.setAttribute('class','wz1play');
	pg3_wz2.setAttribute('class','wz2play');
}
close_p3.onclick=function(){
	p3_1.style.display = "block";
	p3_2.style.display = "none";
}
p4_but.onclick=function(){
	if (a == 0) {
   con_0.setAttribute('class','squ-con con-0play');
   con_1.setAttribute('class','con-1 con-1play');
   con_2.setAttribute('class','con-2 con-2play');
   a = 1;
}
   else if (a==1) {
   con_0.setAttribute('class','squ-con');
   con_1.setAttribute('class','con-1');
   con_2.setAttribute('class','con-2');
   a = 0;
   }
}
}
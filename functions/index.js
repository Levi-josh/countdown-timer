let startTime=0;

let currentTime=0;

let elaspedTime=0;

let hrs=11;

let mins=59;

let secs=60;

let paused=true;

let timer=document.getElementById("timedisplay");
let startBtn=document.getElementById("mybtn");

startBtn.addEventListener("click" ,  countDown)

function countDown(){
if(paused){
    paused=false;
//startTime=Date.now()-elaspedTime;
setInterval(updatesec,1000);

}
}

function updatesec(){
//elaspedTime=Date.now()-startTime;
//secs=Math.round((elaspedTime/1000)%60)
secs-=1;
if(secs<0){secs=59;}
mins-=1/60;
m = Math.ceil(mins);
if(m<0){m=59;}
hrs-=1/3600;
h=Math.ceil(hrs);
if(h<0){h=11;}
h=addzeros(h);

m=addzeros(m);

secs=addzeros(secs);
timer.textContent=`${h}:${m}:${secs}`;



function addzeros(unit){
    return (("0") + unit).length >2 ? unit:"0"+unit;
}

}
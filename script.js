let stopwatch=document.querySelector(".stopWatch");
let startButton=document.getElementById("start");
let stopButton=document.getElementById("stop");
let resetButton=document.getElementById("reset");



let timer=0;
let hour=0;
let minute=0;
let second=0;

function startStopwatch(){
    timer=setInterval(function(){
        second++;
        if(second===60){
            second=0;
            minute++;
        }

        if(minute===60){
            minute=0;
            hour++;
        }
        stopwatch.innerHTML=formate(hour)+":"+formate(minute)+":"+formate(second);
    },1000);
}

function stopStopwatch(){
    clearInterval(timer);
}

function resetStopwatch(){
    clearInterval(timer);
    hour=0;
    minute=0;
    second=0;
    stopwatch.innerHTML="00:00:00";
}

function formate(time) {
    if(time<10){
        return "0"+time;
    }
    return time;
   // return time<10 ? "0"+time : time;
}

startButton.addEventListener("click",startStopwatch);
resetButton.addEventListener("click",resetStopwatch);
stopButton.addEventListener("click",stopStopwatch);
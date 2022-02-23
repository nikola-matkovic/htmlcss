let timer = 0, timerInterval;
const button = document.querySelector("button");

button.addEventListener("mousedown", down);
button.addEventListener("mouseup", up);
button.addEventListener("dblclick", reset);

function down(){
    console.log("im down");
    timerInterval = setInterval(function(){
        timer += 1;
        navigator.vibrate(100);
    }, 300);
}

function up(){
    console.log("im up");
    clearInterval(timerInterval);
    console.log(timer);
    timer = 0;
}

function reset(){
    console.log("reseted");
}
document.addEventListener("keyup", event => {
    let key = event.key;
    console.log(key);
    if(key === "ArrowUp"){
        if(part === 1){
            console.log(!!timerInterval)
            timerInterval = setInterval(function(){
                m++;
                console.log(m);
                clearInterval(timerInterval);
            }, 300);
        }
    }
});

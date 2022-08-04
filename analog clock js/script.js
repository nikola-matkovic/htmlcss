const secElement = document.querySelector("#sec");
const minElement = document.querySelector("#min");
const hourElement = document.querySelector("#hour");

function getTime(){
    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hour = new Date().getHours();
    return [hour, min, sec]
}
setInterval(() => {
    let time = getTime();
    secElement.style.transform = `rotate(${time[2]*6}deg)`;
    minElement.style.transform = `rotate(${time[1]* }deg)`;

}, 1000);

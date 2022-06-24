const svg = document.querySelector('svg');

svg.addEventListener("click",  (e)  => {
    let random = () => {
        const colorPars = {r: 0, g: 0, b: 0}
        for(i in colorPars){
            colorPars[i] = Math.floor(Math.random() * 255)
        }
        return `rgb(${colorPars.r},${colorPars.g},${colorPars.b})`
    }
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink']; 
    const random2 = () => colors[Math.floor(Math.random() * colors.length)]
    document.documentElement.style.cssText = `
    --dark-color :  ${ typeof random() === 'function' ? random() : random2() };
    --light-color : ${ typeof random() === 'function' ? random() : random2() };
    `

});
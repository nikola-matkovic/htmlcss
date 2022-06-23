const svg = document.querySelector('svg');

svg.addEventListener("click",  (e)  => {
    let random = () => {
        const colorPars = {r: 0, g: 0, b: 0}
        for(i in colorPars){
            colorPars[i] = Math.floor(Math.random() * 255)
        }
        return `rgb(${colorPars.r},${colorPars.g},${colorPars.b})`
    }

    document.documentElement.style.cssText = `
    --dark-color : ${random()};
    --light-color : ${random()};
    `
}
);
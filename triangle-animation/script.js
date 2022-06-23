const svg = document.querySelector('svg');

svg.addEventListener("click",  (e)  => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink']; 
    const random = () => colors[Math.floor(Math.random() * colors.length)]
    document.documentElement.style.cssText = `
    --dark-color : ${random()};
    --light-color : ${random()};
    `
}
);
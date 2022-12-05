let btn = document.querySelector("button")
let body = document.body
let broj = 0;

let change = () => {
    broj = (broj + 1) % 3
    if (broj === 0) {
        btn.textContent = "Klikni me"
        body.style.backgroundColor = "white";
        return
    }
    if (broj === 1) {
        btn.textContent = "Klikni opet"
        body.style.backgroundColor = "blue";
        return
    }
    if (broj === 2) {
        btn.textContent = "Klikni opet"
        body.style.backgroundColor = "red";
        return
    }
}


setInterval(change, 50);

btn.addEventListener("click", change)


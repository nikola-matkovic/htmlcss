let dugmeElement = document.querySelector("#dugme");
let zMinElement = document.querySelector("#zmin");
let zMaxElement = document.querySelector("#zmax");
let duzinaElement = document.querySelector("#duzina");
let nizElement = document.querySelector("#niz");
let ispisElement = document.querySelector("#ispis");

const srediNiz = (min, max, niz, duzina) => {
    return [...niz.filter(value => value > min && value < max), ...niz.filter(value => value <= min || value >= max )]
}

dugmeElement.addEventListener("click", () => {
    let niz = nizElement.value.split(" ");
    let duzina = duzinaElement.valueAsNumber;
    let zMin = zMaxElement.valueAsNumber;
    let zMax = zMinElement.valueAsNumber;

    if (niz.length !== duzina) {
        alert(`Molimo unesite niz dužine ${duzina} ili promenite dužinu niza`);
        return;
    }
    let sredjenNiz = srediNiz(zMin, zMax, niz, duzina);

    ispisElement.textContent = sredjenNiz.join(", ");
})
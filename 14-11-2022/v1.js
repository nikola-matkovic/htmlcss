const ucitajBroj = () => {
    let broj = prompt("Uneiste jedan broj")
    try {
        if (broj === "") {
            throw("Uneit broj je prazan string")
        }
        broj = Number(broj);
        if (isNaN(broj)) {
            throw("Nije unet ispravan string za broj")
        }
    } catch (error) {
        console.log("error", error);
    }
}
ucitajBroj();


function ucitajKorisnickoIme() {
    let ime = prompt("unesite jedno korisično ime")
    try {
        if (ime === "") {
            throw ("ime je obavezno polje")
        }
        if (ime.length >= 6) {
            throw ("Ime mora imati najmanje 6 karatkera");
        }
    } catch (error) {
        console.log("error", error);
    }
}
ucitajKorisnickoIme();
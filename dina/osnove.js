// definisanje varijabli .
let ime = "nešto";


let broj = 10;

broj = 3.14;

// u 90 % slučajeva korisitiš let.

// kad ti treba nešto što neće da se izmeni koristš const

const a = 14;

//   nizovi 

let voće = ["banana", "jabuka", "jagoda", "višnja"]

let brojevi = [10, 21, 10, 43, 18]


// filter vraća niz napravljen od postojećeg niza.

let punoletni = brojevi.filter(broj => broj >= 18)

let voće2 = ["trešnja", "šljiva", "paradajz"];

// spajanje 2 niza 

// 1 način :

let svoVoće = voće.concat(voće2)

// 2 način :


let sveVoće = [...voće, ...voće2]

// mapa pravi novi niz od postojećeg

let slatko = sveVoće.map(voće => "Slatko " + voće)

// rad sa stringovima 

let prezime = "bećirović";

let prvoslovo = prezime[0];

let pravilnoPrezime = prezime[0].toUpperCase()

for (let i = 1; i < prezime.length; i++){
    pravilnoPrezime += prezime[i]
}

console.log(pravilnoPrezime);

//objekti

let osoba = {
    ime: "Nikola",
    prezime: "matković",
    godine : 20
}

console.log(osoba.ime);


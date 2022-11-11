class Student {
    constructor(ime, prezime, brojIndeksa) {
        this.ime = ime;
        this.prezime = prezime;
        this.brojIndeksa = brojIndeksa;
        this.ocene = []
    }
    get prosek() {
        let suma = 0;
        this.ocene.forEach(ocena => suma += ocena)
        return suma / this.ocene.length;
    }
    dodajOcenu(ocena) {
        this.ocene.push(ocena)
    }
}

let tarik = new Student("Tarik", "Kučević", "036012/21")

tarik.dodajOcenu(8)
tarik.dodajOcenu(7)
tarik.dodajOcenu(8)
tarik.dodajOcenu(8)
tarik.dodajOcenu(9)
tarik.dodajOcenu(9)

let nikola = new Student("Nikola", "Matković", "036016/21")

nikola.dodajOcenu(10)
nikola.dodajOcenu(10)
nikola.dodajOcenu(9)
nikola.dodajOcenu(6)
nikola.dodajOcenu(8)
nikola.dodajOcenu(8)

// let  najbolji = (...studenti)  => Math.max(...studenti.map(student => student.prosek));

// let voce = ["jabuka", "kruška", "banana"]

let povrce = ["pasulj", "krompir", "Kupus", "Paprika"]


// let biljke = [...voce, ...povrce, "smrča", "ruža" ]

// console.log(Math.max(...[2, 3, 4, 5]))

// console.log(...povrce)


// function saberi(...sabirci) {
//     let zbir = 0;
//     sabirci.forEach(sabirak => zbir += sabirak)
//     return zbir;
// }


// console.log(saberi(1,2,3))

// function najbolji(...studenti) {
//     return Math.max(...studenti.map(student => student.prosek));
// }

// console.log(najbolji(tarik, nikola))

let niz1 = [1, 2, 3, 4, 5]

let faktorijali = niz1.map(function (broj) {
    let faktorijalBroja = 1;
    for (let i = broj; broj > 0; broj--){
        faktorijalBroja *= broj;
    }
    return faktorijalBroja
} )


console.log(faktorijali)



let predstaviSe = (ime, prezime, godine) => {
    console.log(`Zoveš se ${ime} ${prezime} i ti si  ${godine > 18 ? `Punoletan` : `Maloletan`}`)
}

function saberi(a, b) {
    return a + b;
}

let saberi2 = (a, b) =>  a+b

function kvadriraj(broj) {
    return broj ** 2
}

let kvadriraj2 = broj => broj ** 2 

console.log(kvadriraj2(5))

predstaviSe("nikola", "matković", 20)


let  najbolji = (...studenti) =>  Math.max(...studenti.map(student => student.prosek));
console.log(najbolji(tarik, nikola))
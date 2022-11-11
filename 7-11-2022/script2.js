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

// let  najbolji = (...studenti)  => Math.max(...studenti.map(student => student.prosek));

// let voce = ["jabuka", "kruška", "banana"]

let povrce = ["pasulj", "krompir", "Kupus", "Paprika"]


// let biljke = [...voce, ...povrce, "smrča", "ruža" ]

console.log(Math.max(...[2, 3, 4, 5]))

console.log(...povrce)
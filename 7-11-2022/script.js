class  student {
    constructor(ime, prezime, brojIndeksa) {
        this.ime = ime;
        this.prezime = prezime;
        this.brojIndeksa = brojIndeksa;
        this.ocene = []
    }
    predstaviSe() {
        console.log(`moje ime je  ${this.ime} ${this.prezime}, broj indeksa mi je  ${this.brojIndeksa} `)
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

let student1 = new student("nikola", "Matković", "036016/21")

student1.dodajOcenu(10)
student1.dodajOcenu(8)

console.log(student1.prosek);

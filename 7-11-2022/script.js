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

function najbolji(...studenti) {
    let niz = []
    studenti.forEach(student => niz.push(student.prosek))
    console.log(niz);
    return Math.max(niz);
}

let student1 = new student("nikola", "Matković", "036016/21")

student1.dodajOcenu(10)
student1.dodajOcenu(7)

let student2 = new student("tarik", "kučević", "036016/21")

student2.dodajOcenu(10)
student2.dodajOcenu(8)


console.log(najbolji(student1, student2));

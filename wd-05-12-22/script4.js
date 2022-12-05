let imeElement = document.querySelector("#ime");
let prezimeElement = document.querySelector("#prezime");
let indeksElement = document.querySelector("#indeks");
let ocenaElement = document.querySelector("#ocena");
let btnElement = document.querySelector("#dodaj")
let btn2Element = document.querySelector("#napraviTabelu")
let table = document.querySelector("#studenti")
let studenti = []

class Student{
    constructor(ime, prezime, indeks, ocena) {
        this.ime = ime;
        this.prezime = prezime;
        this.index = indeks;
        this.ocena = ocena
    }
}

btnElement.addEventListener("click", () => {
    console.log("clik1");
    let ime = imeElement.value;
    let prezime = prezimeElement.value;
    let indeks = indeksElement.value;
    let ocena = ocenaElement.value;
    let student = new Student(ime, prezime, indeks, ocena);
    studenti.push(student)
})

btn2Element.addEventListener("click", () => {
    console.log("clik2");

    let html = studenti.map(student => ` <tr> <td>${student.ime} </td> <td>${student.prezime} </td>
        <td>${student.index} </td>
        <td>${student.ocena} </td>
    </tr>
 `)
    table.innerHTML = html
})
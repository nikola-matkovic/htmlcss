class Ucenik {
    constructor(ime, prezime, prosek, slika) {
        this.ime = ime;
        this.prezime = prezime;
        this.prosek = prosek;
        this.slika = slika;
    }
}
let ucenik1 = new Ucenik("Emina", "Eminović", 9.13, "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg")
let ucenik2 = new Ucenik("Petar", "Petrović", 8.35, "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
let ucenik3 = new Ucenik("Omar", "Alić", 9.45, "https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg")
let ucenik4 = new Ucenik("Emela", "Tahirović", 9.99, "https://thumbs.dreamstime.com/z/default-female-avatar-profile-picture-icon-grey-woman-photo-placeholder-vector-illustration-88413637.jpg")

const ucenici = [ucenik1, ucenik2, ucenik3, ucenik4]
const table = document.querySelector("#table")

let html;

ucenici.forEach(ucenik => {
    html += `
    <tr>
        <td>${ucenik.ime}</td>
        <td>${ucenik.prezime}</td>
        <td>${ucenik.prosek}</td>
        <td> <img src ="${ucenik.slika}"></td>
        </tr>
    `
})

table.innerHTML = table.innerHTML + html;
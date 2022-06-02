class Automobil {
    constructor(proizvodjac, brojVrata, godiste, kubikaza, cena) {
        this.proizvodjac = proizvodjac;
        this.brojVrata = brojVrata;
        this.godiste = godiste;
        this.kubikaza = kubikaza;
        this.cena = cena;
    }
}

let  a1 =  new Automobil("Volkswagen touren", 5, 2004, "1968 cm3", 2650);
let  a2 =  new Automobil("BMW 520 d", 5, 2005, "1986 cm3", 5700);
let  a3 =  new Automobil("mercedes benz GLA 180 Cdi auto pano", 5, 2017, "1461 cm3", 24500);

let automobili = [a1, a2, a3];

//get table
let table = document.getElementById("table");

automobili.forEach( automobil => {
    console.log("works");
    //create table  row wiht information about each automobil
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    //enter information about each automobil
    td1.innerHTML = automobil.proizvodjac;
    td2.innerHTML = automobil.brojVrata;
    td3.innerHTML = automobil.godiste;
    td4.innerHTML = automobil.kubikaza;
    td5.innerHTML = automobil.cena;
    //create details button
    let button = document.createElement("button");
    button.innerHTML = "Details";
    //apend button to td6
    td6.appendChild(button);
    //add information about each automobil to table row
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    //add table row to table
    document.getElementById("table").appendChild(row);
    console.log(automobil);
});
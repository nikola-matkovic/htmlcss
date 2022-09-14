class Tim  {
    constructor(ime, brojBodova, BrojPobeda, brojNeresenih, brojIzgubljenih){
        this.ime = ime;
        this.brojBodova = brojBodova;
        this.BrojPobeda = BrojPobeda;
        this.brojNeresenih = brojNeresenih;
        this.brojIzgubljenih = brojIzgubljenih;
        this.ime = ime;
    }
}

let brojBodovaElement = document.querySelector("#bb");
let brojPobedaElement  = document.querySelector("#bp");
let brojNeresenihElement = document.querySelector("#bn");
let brojIzgubljenihElement = document.querySelector("#bi");



timovi = [];
let i = 0;

let naziviTimova = prompt("unestite nazive timova").split(",");

naziviTimova.forEach(tim => {
    timObj = new Tim(tim, 0, 0, 0, 0);
    timovi.push(timObj);
})

function snimi(){
    timovi[i].brojBodova = bb.value;
    timovi[i].brojPobeda = bp.value;
    timovi[i].brojIzgubljenih = bi.value;
    timovi[i].brojNeresenih = bn.value;
    console.log(timovi);
}
let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mojaFunkcija = function () {
    return 10;
}

Array.prototype.mojaMapa = function (cb) {
    let noviNiz = []
    for (let i = 0; i < this.length; i++) {
        noviNiz.push(  cb( this[i] , i, this))
    }
    return noviNiz;
}

let brojeviMapirani1 = brojevi.map(broj => broj ** 2)
let brojeviMapirani2 = brojevi.mojaMapa(broj => broj ** 2)

console.log(brojeviMapirani1, brojeviMapirani2)
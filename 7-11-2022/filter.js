let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Array.prototype.mojFilter = function (cb) {
    let noviNiz = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            noviNiz.push(this[i])
        }
    }
    return noviNiz;
}

let filtrirano1 = brojevi.filter(broj => broj > 5)
let filtrirano2 = brojevi.mojFilter(broj => broj > 5)

console.log({filtrirano1, filtrirano2})
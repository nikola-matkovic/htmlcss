let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



Array.prototype.mojReduce = function (cb, prew) {
    for (let i = 0; i < this.length; i++) {
        if (prew == null && i == 0) {
            prew = this[i]
        }
        else {
            prew = cb(prew, this[i], i, this)
        }
    }
    return prew;
}

let reduce1 = brojevi.reduce( (prew, next) => prew + next, 0)
let reduce2 = brojevi.mojReduce( (prew, next) => prew + next, 0)

console.log({reduce1, reduce2});
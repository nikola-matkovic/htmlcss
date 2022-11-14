let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mojSome= function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
    }
    return false;
}

let some1 = brojevi.some(broj => broj > 15)
let some2 = brojevi.mojSome(broj => broj > 15)

console.log({some1, some2});
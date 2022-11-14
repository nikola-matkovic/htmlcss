let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mojSome= function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

let every1 = brojevi.some(broj => broj < 15)
let every2 = brojevi.mojSome(broj => broj < 15)

console.log({ every1, every2 });
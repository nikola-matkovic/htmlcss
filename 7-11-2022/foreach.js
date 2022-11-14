let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Array.prototype.mojForeach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb( this[i] , i, this)
    }
}

brojevi.forEach(broj => console.log(broj))
brojevi.mojForeach(broj => console.log(broj))

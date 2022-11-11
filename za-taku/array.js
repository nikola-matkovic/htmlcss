let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//foreach

array.forEach(element => console.log(element))

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}


//map 

let noviNiz = array.map(element => element ** 2)

console.log(noviNiz)


let noviNiz2 = []
for (let i = 0; i < array.length; i++) { 
    noviNiz2.push(array[i]  ** 2)
}

//filter

let veciOd5 = array.filter(element => element > 5)
let veciOd52 = []

for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
        veciOd52.push(array[i])
    }
}
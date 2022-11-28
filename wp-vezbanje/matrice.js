let arr = [ 1, 2, 3, "nikola" , {ime: "pućko", zanimanje: "ljubimac"} , true, [1, 2, 3, 4, 5, ["tarik", "kučević"]]         ]

// console.log(arr[6][5][1]) //kučević

let matrix =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12, 13]
]

// console.log(matrix[1][1]) // 5

for(let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}

matrix.forEach(row => {
    row.forEach(element => {
        console.log(element)
    })
})
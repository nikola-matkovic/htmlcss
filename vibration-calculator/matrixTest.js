let m, n, i, j;
const matrix = [];

m = 5;

for(i = 0; i < m; i++){
    matrix[i] = [];
}

n = 10;

for(i = 0; i<m; i++){
    for(j = 0; j<n; j++){
        matrix[i][j] = 0;
    }
}

console.log(matrix);
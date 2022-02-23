let timer = 0, timerInterval = 0, i=0, j=0;
const button = document.querySelector("button");
let m=0, n=0, part=1,  matrix = [];

button.addEventListener("mousedown", down);
button.addEventListener("mouseup", up);
button.addEventListener("dblclick", reset);

function down(){
    console.log("im down");
    timerInterval = setInterval(function(){
        //unos za 
        if(part === 1){
            m++;
        }
        else if(part === 2){
            n++;
        }
        else if(part === 3){
            matrix[i][j]++;
            console.log(matrix);
        }
    }, 300);
}

function up(){ 
    //kada sazna m, podesi  template matrice 
    if(part == 1){
        for(i = 0; i<m; i++){
            matrix[i] = [];
        }
        console.log("ovde", matrix);
    }
    if(part<=2){
        part++;
    }else if(part<3){
        console.log("daaaa"+part);
        part++;
        for(i=0; i<m; i++){
            for(j=0; j<n; j++){
                matrix[i][j]=0;
                console.log(matrix);
            }
        }
        i=0; 
        j=0;
    }
    else if(part==3){
        if(j<n){
            j++;
        }
        if(j==n){
            j=0;
            i++;
        }
        if(i==m){
            part++;
            console.log(matrix);
        }
    }
    console.log(`part ${part}, m ${m}, n${n}, matrix ${matrix} `);
    clearInterval(timerInterval);
}

function reset(){
    console.log("reseted");
}
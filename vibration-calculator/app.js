let timer = 0, timerInterval = 0, i=0, j=0;
const button = document.querySelector("button");
let m=0, n=0, part=1,  matrix = [];

button.addEventListener("mousedown", down);
button.addEventListener("mouseup", up);
button.addEventListener("dblclick", reset);

function down(){
    timerInterval = setInterval(function(){
        //unos za 
        console.log(i, j);
        if(part === 1){
            m++;
        }
        else if(part === 2){
            n++;
        }
        else if(part === 3){
            console.log(m, n, i , j)
            matrix[i][j] = 1;
        }
    }, 300);
}

function up(){ 
    
    //briše interval
    clearInterval(timerInterval);

    //kada sazna m, podesi  template matrice 
    if(part == 1){
        for(i = 0; i<m; i++){
            matrix[i] = [];
        }
        i++;
        part++;
    }
    //kada sazna n, pravi praznu matricu (sa nulama)
    else if(part==2){
        part++;
        for(i=0; i<m; i++){
            for(j=0; j<n; j++){
                matrix[i][j]=0;
            }
        }
        i = 0;
        j=0;
    }
    //Unos brojeva 
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
        }
    }
}

function reset(){
    console.log("reseted");
}
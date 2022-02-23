let timer = 0, timerInterval = undefined, i=0, j=0, t=0, m=0, n=0, part=1,  matrix = [], operation=0, s="";
const button = document.querySelector("button");


button.addEventListener("mousedown", down);
button.addEventListener("mouseup", up);
button.addEventListener("dblclick", reset);

function down(){
    t = 0;
    timerInterval = setInterval(function(){
        //unos za 
        console.log(i, j);
        if(part === 1){
            navigator.vibrate(400);
            m++;
        }
        else if(part === 2){
            navigator.vibrate(100);
            n++;
        }
        else if(part === 3){
            navigator.vibrate(100);
            t++;
        }
        else if(part === 4){
            operation++;
        }
    }, 200);
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
            print();
        }else{
            matrix[i][j] = t;
        }
    }
    else if(part==4){
        part++;
    }
}

function print(){
    s+="<table>";
    for(i=0; i<m; i++){
        s+="<tr>"
        for(j=0; j<n; j++){
            s+= "<td> " + matrix[i][j] + "</td>";
        }
        s+="</tr>"
    }
    s+="</table>";
    document.getElementById("cont").innerHTML= s;
}

function reset(){
    console.log("reseted");
}
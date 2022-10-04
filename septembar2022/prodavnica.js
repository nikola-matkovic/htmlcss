let n = 5

let NizCena = [100, 200, 300,  400, 150]

let naRaspolaganju = 560;

let broj = 0;
while (1){
   let  najjeftiniji = Math.min(...NizCena);
   naRaspolaganju  -= najjeftiniji;
   let indexNajjeftinijeg =  NizCena.indexOf(najjeftiniji);
   NizCena.splice(indexNajjeftinijeg, 1)
   if(naRaspolaganju > 0){
    broj ++;
   }
   else{
    break;
   }
}

let main = document.getElementById("main")
let p = document.createElement("p")
p.innerHTML = broj;
main.appendChild(p);
let elemeTekst = document.getElementById("tekst")

elemeTekst.textContent = "Naila";

elemeTekst.style.color = "green";

elemeTekst.style.backgroundColor = "lightgray"

let naslov = document.createElement("H1");

naslov.textContent = "DOM"  

let kont = document.querySelector("#kont");

kont.appendChild(naslov)

naslov.id = "Naslov";


naslov.classList.add("prva");
naslov.classList.add("druga");
naslov.classList.add("treca");

naslov.classList.remove("prva");

naslov.classList.toggle("druga");

let test = document.querySelectorAll(".test");

test.forEach(t => t.style.color = "red") 

document.body.style.backgroundColor = "yellow";


let dugme = document.querySelector("#dugme")

dugme.addEventListener("click", () => alert("test clicked"))
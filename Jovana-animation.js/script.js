let letters = "ABCČĆDĐEFGHJKLMNOPRSŠTUVZŽАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ"

let textElem = document.getElementById("text")
const texts = "ВОЛИМ ТЕ ПУНО! ХВАЛА ЗА СВЕ!"

let intervals = 0

let interval = setInterval(() => {

    let newText = "";

    for(let i = 0; i < texts.length; i++) {

    if(texts.charAt(i) === " "){
        newText += " "
        continue
    }

    if(i <= intervals / 3){
        newText += texts.charAt(i); 
    }
    else{
        newText += letters.charAt(Math.floor(Math.random() * letters.length + 1))
    }
    textElem.textContent = newText;
    }

intervals++;
},20)

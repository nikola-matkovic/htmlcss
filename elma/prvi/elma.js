function Automobil(naziv, brVrata, kubikaza, godiste, cena){
        this.naziv=naziv;
        this.brVrata=brVrata;
        this.kubikaza=kubikaza;
        this.godiste=godiste;
        this.cena=cena;
        this.prikazi = function(){
            var parent = document.getElementById("center");
            var el = document.createElement("table");
            var t = "<tr><td>" + this.naziv + " " + this.brVrata + " "  + this.kubikaza + " "  + this.godiste + " "  + this.cena + " "  + "</tr></td>"
            el.innerHTML = t;
            parent.appendChild(el); 
        }
    }
auto = new Automobil("VW", "Golf", "2.0", "2020", "20000");
auto.prikazi();
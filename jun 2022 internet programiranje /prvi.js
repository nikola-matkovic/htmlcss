//make class knjiga
class Knjiga {
    constructor(naziv, ISBN,  autor, izdavac, godinaIzdanja, urlSlike, opis) {
        this.naslov = naziv;
        this.ISBN = ISBN;
        this.autor = autor;
        this.izdavac = izdavac;
        this.godina = godinaIzdanja;
        this.urlSlike = urlSlike;
        this.opis = opis;
    }
    punPrikaz = function() {
        return ( `
        <div class="knjiga">
            <span>-</span>
            <h1 class ="naslov">${this.naslov}</h1>
            <div>
                <div class="left">
                    <img src="https://www.delfi.rs/_img/artikli/2015/05/romeo_i_julija_vv.jpg" alt="romeo i">
                    <p class="isbn">${this.ISBN}</p>
                    <p class="godina">${this.godina}</p>
                    <p class="autor">${this.autor}</p>
                    <p class="izdavac">${this.izdavac}</p>
                </div>
                <div class="right">
                    <p class="kratak-opis">${this.opis}</p>
                </div>
            </div>
        </div>`
    )}
}



let main = document.querySelector("main");

let knjiga1 = new Knjiga("Romeo i Julija", "123456789", "Šekspir", "Zavod za udžbenike", "2020", "https://www.delfi.rs/_img/artikli/2015/05/romeo_i_julija_vv.jpg", "voleli se i ubili se ") ;
knjiga1.element = document.createElement("div");
knjiga1.element.innerHTML = knjiga1.punPrikaz();
main.appendChild(knjiga1.element);


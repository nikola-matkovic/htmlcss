class Softver{
    constructor(naziv, kategorija, verzija, autor, opis, url1, url2){
        this.naziv = naziv;
        this.kategorija = kategorija;
        this.verzija = verzija;
        this.autor = autor;
        this.opis = opis;
        this.url1 = url1;
        this.url2 = url2;
    }
    prikazi(id) {
        let elem = document.getElementById(id);
        let div = document.createElement("DIV");
        div.innerHTML = `<h1>Naziv</h1>
        <main>
            <div class="left">
                <img src="${this.url1}" >
                <img src="${this.url2}" >
            </div>
            <div class="right">
                <p> ${this.kategorija} </p>
                <p> ${this.autor} </p>
            </div>
        </main>
        <p id="opis">${this.opis}</p>`
        elem.appendChild(div);
    }
}
const programi = []

programi[0] = new Softver("Google chrome", "pretraživač", 101, "google", "Najbrži pretraživač", "https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk", "https://www.google.com/chrome/static/images/download-browser/big_pixel_phone.png" );
programi[1] = new Softver("Opera", "pretraživač", 43, "opera", "Jako lep pretraživač", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1200px-Opera_2015_icon.svg.png", "https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2021/theme-switcher/gx__color-theme--classic.27f61f65b2ce.png" );
programi[2] = new Softver("Photoshop", "Image editor", "cs6", "Adobe", "Profesionali program za uređivanje slika", "https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png", "https://www.itnetwork.rs/wp-content/uploads/2022/06/adobe-3.webp" );
programi[3] = new Softver("instagram", "social media", 541, "meta", "Najpopularnija društvena mreža", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png", "https://bmc-network.com/wp-content/uploads/2022/04/Instagram-2.jpg");
programi[4] = new Softver("Vscode", "code editor", 4.6, "Microsoft", "Najpopularniji uređivač koda", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png", "https://code.visualstudio.com/opengraphimg/opengraph-home.png" );

programi.forEach(program => program.prikazi("container"));